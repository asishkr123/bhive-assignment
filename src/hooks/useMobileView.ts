import { useState, useEffect, useLayoutEffect } from "react";

const debounce = <T extends (...args: []) => void>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timer: number;
  return (...args: Parameters<T>): void => {
    clearTimeout(timer);
    timer = setTimeout(fn.bind(null, ...args), delay);
  };
};

export const useMobileView = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useLayoutEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", debounce(handleResize, 300));
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
