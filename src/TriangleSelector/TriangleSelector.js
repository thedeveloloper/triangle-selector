import { calculateMidpoint } from "./math";
import Selector from "./Selector";
import Triangle from "./Triangle";

function TriangleSelector() {
  const scale = 5;
  const offset = [100, 125];
  const points = [
    { x: 0, y: 0 },
    { x: 115.46, y: 0 },
    { x: 57.73, y: 100 },
  ].map((coord) => ({
    x: coord.x * scale + offset[0],
    y: coord.y * scale + offset[1],
  }));
  let midpoints = [];
  for (const point of points) {
    const midpoint = calculateMidpoint(
      point,
      points[(points.indexOf(point) + 1) % 3]
    );
    midpoints.push({ x: midpoint[0], y: midpoint[1] });
  }

  console.log(midpoints);

  return (
    <Triangle points={points} midpoints={midpoints}>
      <Selector points={points} midpoints={midpoints} />
    </Triangle>
  );
}

export default TriangleSelector;
