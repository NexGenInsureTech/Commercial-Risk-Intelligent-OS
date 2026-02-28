
import { computeCompositeScore } from "./scoringEngine.js";
import { classifyRisk } from "./rulesEngine.js";
import weights from "../config/scoringWeights.json" assert { type: "json" };
import rules from "../config/underwritingRules.json" assert { type: "json" };

export function generateDecision(intakeData) {
  const score = computeCompositeScore(intakeData, weights.default);
  const category = classifyRisk(score, rules.thresholds);

  return {
    ...intakeData,
    score,
    category,
    underwritingBucket: category === "High Risk" ? "Senior UW" : "Standard UW",
    timestamp: new Date().toISOString()
  };
}
