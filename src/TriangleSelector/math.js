const calculateMidpoint = (a, b) => {
  return [(a.x + b.x) / 2, (a.y + b.y) / 2];
};

function pointInTriangle(a, b, c, p) {
  const s1 = c.y - a.y;
  const s2 = c.x - a.x;
  const s3 = b.y - a.y;
  const s4 = p.y - a.y;

  const w1 = (a.x * s1 + s4 * s2 - p.x * s1) / (s3 * s2 - (b.x - a.x) * s1);
  const w2 = (s4 - w1 * s3) / s1;

  return w1 >= 0 && w2 >= 0 && w1 + w2 <= 1;
}

function sigmoid(value, min = 0, max = 100) {
  return (value - min) / (max - min);
}

function distanceToLine(a, b, p) {
  const s1 = -b.y + a.y;
  const s2 = b.x - a.x;
  return (
    Math.abs((p.x - a.x) * s1 + (p.y - a.y) * s2) / Math.sqrt(s1 * s1 + s2 * s2)
  );
}

export { calculateMidpoint, pointInTriangle, distanceToLine, sigmoid };
