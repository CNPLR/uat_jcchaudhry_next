"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function LastRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const lastRoute = useRef<string | null>(null);

  useEffect(() => {
    const currentRoute =
      pathname + (searchParams.toString() ? `?${searchParams}` : "");

    // Store ONLY the previous route
    if (lastRoute.current !== currentRoute) {
      sessionStorage.setItem("lastRoute", lastRoute.current || "");
      lastRoute.current = currentRoute;
    }
  }, [pathname, searchParams]);

  return null;
}
