import { useEffect } from "react";

/**
 * Hook to detect clicks outside the specified element.
 *
 * @param ref The ref of the element to detect clicks outside.
 * @param callback The callback to execute when a click outside is detected.
 */
function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useOutsideClick;
