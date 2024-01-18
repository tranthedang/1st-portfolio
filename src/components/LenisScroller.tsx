"use client";
// import Tempus from "@studio-freight/tempus";
import Lenis from "@studio-freight/lenis";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

const LenisScroller = () => {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Scroll to top if the dependencies change (on pathname/searchParams/lenis change)
  useEffect(() => {
    if (lenis.current) {
      lenis.current!.scrollTo(0, { immediate: true });
    }
  }, [pathname, searchParams, lenis]);

  useEffect(() => {
    const lenis = new Lenis({ smoothTouch: true, infinite: false });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <></>;
};
export default LenisScroller;
