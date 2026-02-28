
export function computeCompositeScore(data, weights) {
  let score = 0;
  Object.keys(weights).forEach(key => {
    score += (data[key] || 0) * weights[key];
  });
  return Math.round(score);
}
