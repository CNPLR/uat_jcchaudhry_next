import fs from "fs";
import path from "path";

const APP_DIR = path.join(process.cwd(), "app");
const OUTPUT_FILE = path.join(process.cwd(), "lib/staticRoutes.json");

type RouteItem = {
  slug: string;
  updatedAt: string;
};

function collectRoutes(
  dir: string,
  baseRoute = ""
): RouteItem[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes: RouteItem[] = [];

  for (const entry of entries) {
    // Ignore route groups & private folders
    if (entry.name.startsWith("(")) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      routes.push(
        ...collectRoutes(fullPath, `${baseRoute}/${entry.name}`)
      );
    }

    if (entry.isFile() && entry.name === "page.tsx") {
      const stats = fs.statSync(fullPath);

      routes.push({
        slug: baseRoute || "/",
        updatedAt: stats.mtime.toISOString(), // file last modified
      });
    }
  }

  return routes;
}

const routes = collectRoutes(APP_DIR).filter(
  route => !route.slug.includes("[") // remove dynamic routes
);

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(routes, null, 2));

console.log("✅ Static routes generated:", routes);
