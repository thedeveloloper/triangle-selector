import { useContext, useRef, useState } from "react";
import { distanceToLine, pointInTriangle, sigmoid } from "./math";
import "./Selector.css";
import { TriangleSelectorContext } from "./TriangleSelectorContext";

function Selector({ ...props }) {
  const { points, offset } = props;

  const { values, setValues } = useContext(TriangleSelectorContext);

  const [position, setPosition] = useState({
    x: offset.x,
    y: offset.y,
    coords: {},
  });

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
        xOffset: position.x - xDiff - offset.x,
        yOffset: position.y - yDiff - offset.y,
      };

      const newValues = { a: 0, b: 0, c: 0 };
      for (const [index, [key, _value]] of Object.entries(
        Object.entries(newValues)
      )) {
        newValues[key] = Math.round(
          sigmoid(
            distanceToLine(points[index], points[(index + 1) % 3], position),
            0,
            500
          ) * 100
        );
      }

      setValues(newValues);

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

  function getSelectorColor() {
    if (!pointInTriangle(...points, position)) {
      return { fill: "red", stroke: "#F5E8FF" };
    }
    const { a, b, c } = values;
    if (a >= b && a >= c) {
      return { fill: "transparent", stroke: "#00B3F5" };
    } else if (b >= a && b >= c) {
      return { fill: "transparent", stroke: "#F5184A" };
    } else {
      return { fill: "transparent", stroke: "#F5E818" };
    }
  }

  return (
    <svg>
      <circle
        cx={position.x}
        cy={position.y}
        r={10}
        fill={getSelectorColor().fill}
        stroke={getSelectorColor().stroke}
        strokeWidth="2"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </svg>
  );
}

export default Selector;
