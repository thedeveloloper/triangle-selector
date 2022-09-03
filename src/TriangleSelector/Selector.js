import { useRef, useState } from "react";
import { pointInTriangle } from "./math";
import "./Selector.css";

function Selector({ ...props }) {
  const [position, setPosition] = useState({ x: 50, y: 50, coords: {} });

  const { points, midpoints } = props;

  const offset = [100, 125];

  const handleMouseMove = useRef((e) => {
    setPosition((position) => {
      const xDiff = position.coords.x - e.pageX;
      const yDiff = position.coords.y - e.pageY;
      const mouseLocation = {
        x: position.x - xDiff,
        y: position.y - yDiff,
        coords: {
          x: e.pageX,
          y: e.pageY,
        },
        xOffset: position.x - xDiff - offset[0],
        yOffset: position.y - yDiff - offset[1],
      };
      console.log({
        x: mouseLocation.xOffset,
        y: mouseLocation.yOffset,
        inTriangle: pointInTriangle(...points, {
          x: mouseLocation.x,
          y: mouseLocation.y,
        }),
      });
      return mouseLocation;
    });
  });

  const handleMouseDown = (e) => {
    const pageX = e.pageX;
    const pageY = e.pageY;
    setPosition((position) =>
      Object.assign({}, position, {
        coords: {
          x: pageX,
          y: pageY,
        },
      })
    );
    document.addEventListener("mousemove", handleMouseMove.current);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove.current);
    setPosition((position) => Object.assign({}, position, { coords: {} }));
  };

  return (
    <svg>
      <circle
        cx={position.x}
        cy={position.y}
        r={25}
        fill="grey"
        stroke="grey"
        strokeWidth="1"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </svg>
  );
}

export default Selector;
