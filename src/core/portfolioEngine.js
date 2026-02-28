
export function aggregatePortfolio(data) {
  const total = data.length;
  const highRisk = data.filter(d => d.category === "High Risk").length;
  return {
    total,
    highRisk,
    highRiskPercentage: total ? Math.round((highRisk / total) * 100) : 0
  };
}
