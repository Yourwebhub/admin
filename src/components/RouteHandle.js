"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HexLoader } from "./loader";

export default function RouteHandler({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false); // Simulate loading delay to show the loader
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, [pathname]);

  return (
    <div>
      {loading ? (
        <div className="h-screen overflow-hidden">
          <HexLoader />
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
