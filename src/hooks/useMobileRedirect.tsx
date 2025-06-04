import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Hook that redirects to a given path when screen width falls below a threshold (mobile).
 *
 * @param redirectPath - The path to redirect to when mobile screen size is detected.
 * @param breakpoint - The max width in pixels to consider as "mobile" (default: 768).
 */
export function useMobileRedirect(
  redirectPath: string,
  breakpoint: number = 768
) {
  const router = useRouter();
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileScreen(window.innerWidth <= breakpoint);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [breakpoint]);

  useEffect(() => {
    if (isMobileScreen) {
      router.push(redirectPath);
    }
  }, [isMobileScreen, redirectPath, router]);
}
