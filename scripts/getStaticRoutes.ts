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

// Custom routes to include
const missingDynamicRoutes = [
  "video/numerology",
  "video/motivational-podcasts",
  "video/vastu",
  "video/gemstones",
  "video/lo-shu",
  "video/2026-numerology-predictions"
];

// Add custom routes with current timestamp
const customRouteItems: RouteItem[] = missingDynamicRoutes.map(route => ({
  slug: `/${route}`,
  updatedAt: new Date().toISOString()
}));

// Merge all routes and remove duplicates
const allRoutes = [...routes, ...customRouteItems];
const uniqueRoutes = Array.from(
  new Map(allRoutes.map(route => [route.slug, route])).values()
);

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(uniqueRoutes, null, 2));

// console.log("✅ Static routes generated:", uniqueRoutes);
