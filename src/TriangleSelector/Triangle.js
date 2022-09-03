import { useContext } from "react";
import "./Triangle.css";
import { TriangleSelectorContext } from "./TriangleSelectorContext";

function Triangle({ children, ...props }) {
  const { points, midpoints } = props;

  const { values } = useContext(TriangleSelectorContext);

  console.log(values);

  return (
    <svg
      style={{
        border: "1px solid black ",
      }}
      width="750"
      height="750"
      className="svg-triangle"
    >
      <path
        d={`M ${points
          .map((coord) => Object.values(coord).join(","))
          .join(" ")} z`}
      />

      <text
        x={points[2].x - 24}
        y={points[2].y + 40}
        fontSize="3em"
        style={{ fill: "red" }}
      >
        {values.a}
      </text>
      <text
        x={points[0].x - 48}
        y={points[0].y - 10}
        fontSize="3em"
        style={{ fill: "red" }}
      >
        {values.b}
      </text>
      <text
        x={points[1].x + 5}
        y={points[1].y - 5}
        fontSize="3em"
        style={{ fill: "red" }}
      >
        {values.c}
      </text>

      {[...Array(3)].map((_, i) => (
        <line
          key={i}
          x1={points[i].x}
          y1={points[i].y}
          x2={midpoints[(i + 1) % 3].x}
          y2={midpoints[(i + 1) % 3].y}
          style={{ stroke: "grey", strokeWidth: 0.5 }}
        />
      ))}
      {children}
    </svg>
  );
}

export default Triangle;
