import React, { useState, useEffect } from "react";

function HookMouse() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  //   const logMousePosition = (e) => {
  //     // console.log("Mouse event");
  //     setX(e.clientX);
  //     setY(e.clientY);
  //   };

  //   useEffect(() => {
  //     // console.log("useEffect called");
  //     window.addEventListener("mousemove", logMousePosition);
  //   });

  return (
    <div>
      Hooks X - {X} Y - {Y}
    </div>
  );
}

export default HookMouse;
