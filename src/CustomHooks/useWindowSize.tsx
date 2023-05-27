import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    }

    window?.addEventListener("resize", handleResize);

    handleResize();

    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  return {
    windowSize,
    sm: (windowSize?.width || 0) < 640,
    md: (windowSize?.width || 0) < 768,
    lg: (windowSize?.width || 0) < 1024,
    xl: (windowSize?.width || 0) < 1280,
  };
};

export default useWindowSize;
