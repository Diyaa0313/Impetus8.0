import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position based on mouse movement
  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add mouse move event listener
    window.addEventListener("mousemove", onMouseMove);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="custom-cursor-circle"></div>
    </div>
  );
};

export default Cursor;
