
export function aggregatePortfolio(data) {
  const total = data.length;
  const highRisk = data.filter(d => d.category === "High Risk").length;
  const avgScore = total ? Math.round(data.reduce((a,b)=>a+b.score,0)/total) : 0;

  return {
    total,
    highRisk,
    avgScore
  };
}
