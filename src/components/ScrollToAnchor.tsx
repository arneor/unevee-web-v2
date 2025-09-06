import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToAnchor = () => {
  const location = useLocation();
  const lastHash = useRef("");

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // Remove the # symbol
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      // Delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(lastHash.current);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          lastHash.current = "";
        }
      }, 100);
    } else if (!location.hash) {
      // Scroll to top when no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

export default ScrollToAnchor;
