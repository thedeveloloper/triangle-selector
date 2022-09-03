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

export { calculateMidpoint, pointInTriangle };
