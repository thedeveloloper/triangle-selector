import "./TriangleSelector.css";

function TriangleSelector() {
  const triangleLength = 300;
  // const triangleCoordinates = [
  //   [0, 0],
  //   [triangleLength, 0],
  //   [triangleLength / 2, (triangleLength * Math.sqrt(3)) / 2],
  //   // [triangleLength / 2, (triangleLength * Math.sqrt(3)) / 2],
  // ]
  const triangleCoordinates = [
    [0, 0],
    [triangleLength, 0],
    [triangleLength / 2, (triangleLength / 2) * Math.sqrt(3)],
  ]
    .map(([x, y]) => `${x},${y}`)
    .join(" ");
  return (
    <>
      {/* <div className="triangle" />
      <div className="triangle-border" />
      <div className="triangle-selector" /> */}
      {/* <svg height="210" width="500">
        <polygon
          points={triangleCoordinates}
          style={{ fill: "none", stroke: "white", "stroke-width": 5 }}
        />
      </svg> */}
      <div style={{ position: "absolute" }}>
        <svg height="210" width="500">
          <path
            d={"M " + triangleCoordinates + " z"}
            style={{
              fill: "none",
              stroke: "white",
              strokeWidth: 5,
              padding: "100px",
            }}
          />
        </svg>
      </div>
      <div style={{ position: "absolute" }}>
        <svg>
          <circle cx={50} cy={50} r={15} fill="none" stroke="white" />
        </svg>
      </div>
    </>
  );
}

export default TriangleSelector;
