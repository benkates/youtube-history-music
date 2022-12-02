import { useState, useMemo, useEffect } from "react";

//https://bobbyhadz.com/blog/react-check-if-element-in-viewport

function useIsInViewport(ref) {
  //declare reactive vars
  const [isIntersecting, setIsIntersecting] = useState(false);

  //create observer
  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  //observe incoming ref
  useEffect(() => {
    observer.observe(ref.current);

    //disconnect on unmount
    return () => {
      observer.disconnect();
    };
    //depend on ref and observer (memo)
  }, [ref, observer]);

  return isIntersecting;
}

export default useIsInViewport;
