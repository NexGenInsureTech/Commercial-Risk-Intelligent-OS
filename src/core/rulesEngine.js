
export function classifyRisk(score, rules) {
  if (score >= rules.high) return "Low Risk";
  if (score >= rules.medium) return "Moderate Risk";
  return "High Risk";
}
