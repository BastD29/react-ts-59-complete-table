import { useEffect } from "react";

/**
 * Hook to detect clicks outside the specified element.
 *
 * @param ref The ref of the element to detect clicks outside.
 * @param callback The callback to execute when a click outside is detected.
 */
const useClickOutside = (
  ref: React.RefObject<HTMLElement> | null,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    if (ref) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickOutside;
