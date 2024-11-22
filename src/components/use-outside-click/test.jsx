import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnClickOutisideTest() {
  const ref = useRef();
  useOutsideClick(ref, () => setShowcontent(false));
  const [showContent, setShowcontent] = useState(false);
  return (
    <div>
      {showContent ? (
        <div ref={ref}>This is a random content</div>
      ) : (
        <button onClick={() => setShowcontent(true)}>Show content</button>
      )}
    </div>
  );
}
