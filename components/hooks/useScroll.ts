import { useState, useEffect } from "react";

export function useScroll() {
  // storing this to get the scroll direction

  // scroll direction would be either up or down
  const [scrollDirection, setScrollDirection] = useState<string>();

  const listener = (e) => {
    setScrollDirection(
      -document.body.getBoundingClientRect().top > 100 ? "down" : "up"
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollDirection,
  };
}
