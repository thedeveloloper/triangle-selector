import { calculateMidpoint } from "./math";
import Selector from "./Selector";
import Triangle from "./Triangle";
import { TriangleSelectorContextProvider } from "./TriangleSelectorContext";

function TriangleSelector() {
  const scale = 5;
  const offset = { x: 100, y: 125 };
  const points = [
    { x: 0, y: 0 },
    { x: 115.46, y: 0 },
    { x: 57.73, y: 100 },
  ].map((coord) => ({
    x: coord.x * scale + offset.x,
    y: coord.y * scale + offset.y,
  }));
  let midpoints = [];
  for (const point of points) {
    const midpoint = calculateMidpoint(
      point,
      points[(points.indexOf(point) + 1) % 3]
    );
    midpoints.push({ x: midpoint[0], y: midpoint[1] });
  }

  return (
    <TriangleSelectorContextProvider>
      <Triangle points={points} midpoints={midpoints}>
        <Selector points={points} offset={offset} />
      </Triangle>
    </TriangleSelectorContextProvider>
  );
}

export default TriangleSelector;
