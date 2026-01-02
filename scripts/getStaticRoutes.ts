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

  // Check for page.tsx in current directory first
  const pageFile = path.join(dir, "page.tsx");
  if (fs.existsSync(pageFile)) {
    const stats = fs.statSync(pageFile);
    const slug = baseRoute || "/";
    routes.push({
      slug,
      updatedAt: stats.mtime.toISOString(),
    });
  }

  for (const entry of entries) {
    // Ignore route groups & private folders
    if (entry.name.startsWith("(")) continue;
    // Ignore dynamic routes
    if (entry.name.startsWith("[")) continue;
    // Ignore files (we already processed page.tsx above)
    if (entry.isFile()) continue;

    const fullPath = path.join(dir, entry.name);
    const newRoute = baseRoute ? `${baseRoute}/${entry.name}` : `/${entry.name}`;
    routes.push(...collectRoutes(fullPath, newRoute));
  }

  return routes;
}

const routes = collectRoutes(APP_DIR);

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(routes, null, 2));

// console.log("✅ Static routes generated:", routes);
