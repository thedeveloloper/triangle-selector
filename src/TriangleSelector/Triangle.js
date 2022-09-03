import "./Triangle.css";

const calculateMidpoint = (a, b) => {
  return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
};

function Triangle({ children }) {
  const scale = 5;
  const offset = [100, 125];
  const trianglePoints = [
    [0, 0],
    [115.46, 0],
    [57.73, 100],
  ].map((coord) => coord.map((c, i) => c * scale + offset[i]));

  let triangleMidpoints = [];
  for (const coord of trianglePoints)
    triangleMidpoints.push(
      calculateMidpoint(
        coord,
        trianglePoints[(trianglePoints.indexOf(coord) + 1) % 3]
      )
    );

  return (
    <svg
      style={{
        border: "1px solid black",
      }}
      width="750"
      height="750"
      className="svg-triangle"
    >
      <path
        d={`M ${trianglePoints.map((coord) => coord.join(",")).join(" ")} z`}
      />
      {[...Array(3)].map((_, i) => (
        <line
          key={i}
          x1={trianglePoints[i][0]}
          y1={trianglePoints[i][1]}
          x2={triangleMidpoints[(i + 1) % 3][0]}
          y2={triangleMidpoints[(i + 1) % 3][1]}
          style={{ stroke: "grey", strokeWidth: 0.5 }}
        />
      ))}
      {children}
    </svg>
  );
}

export default Triangle;
