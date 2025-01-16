import { useEffect, useRef } from "react";

const CircleFollow = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (circleRef.current) {
        circleRef.current.style.left = `${x - 450}px`;
        circleRef.current.style.top = `${y - 450}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        ref={circleRef}
        className="fixed w-[900px] h-[900px] rounded-[50%] bg-circle pointer-events-none transition-colors z-[999]"
      ></div>
    </div>
  );
};

export default CircleFollow;
