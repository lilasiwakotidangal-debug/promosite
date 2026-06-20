"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteTransition() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handlePopState = () => setIsLoading(true);

    const handleClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) {
        return;
      }

      const nextUrl = new URL(link.href, window.location.href);
      if (nextUrl.origin !== window.location.origin || nextUrl.pathname === window.location.pathname) {
        return;
      }

      setIsLoading(true);
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 420);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="routeTransition" role="status" aria-live="polite" aria-label="Loading page">
      <div className="routeSkeleton">
        <div className="skeletonHero" />
        <div className="skeletonContent">
          <div className="skeletonLine skeletonLineShort" />
          <div className="skeletonLine skeletonLineWide" />
          <div className="skeletonGrid">
            <div className="skeletonCard" />
            <div className="skeletonCard" />
            <div className="skeletonCard" />
          </div>
        </div>
      </div>
    </div>
  );
}
