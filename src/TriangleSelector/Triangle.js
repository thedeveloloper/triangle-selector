import "./Triangle.css";

function Triangle({ children, ...props }) {
  const { points, midpoints } = props;

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
