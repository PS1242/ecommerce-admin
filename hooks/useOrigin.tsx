import { useState, useEffect } from "react";

export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);

  let origin = "";

  if (window?.location?.origin) {
    origin = window.location.origin;
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return "";
  }

  return origin;
};
