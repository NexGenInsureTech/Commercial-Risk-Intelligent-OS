
import { generateDecision } from "../core/decisionOrchestrator.js";
import { saveProspect } from "./mockDB.js";

export function renderIntake(container) {
  container.innerHTML = `
    <div class="card">
      <h2>New Prospect Intake</h2>
      <input id="financialStrength" placeholder="Financial Strength (0-100)" /><br/><br/>
      <input id="industryRisk" placeholder="Industry Risk (0-100)" /><br/><br/>
      <input id="claimsHistory" placeholder="Claims History (0-100)" /><br/><br/>
      <button onclick="submitIntake()">Submit</button>
    </div>
  `;
}

window.submitIntake = function() {
  const data = {
    financialStrength: Number(document.getElementById("financialStrength").value),
    industryRisk: Number(document.getElementById("industryRisk").value),
    claimsHistory: Number(document.getElementById("claimsHistory").value)
  };

  const decision = generateDecision(data);
  saveProspect(decision);
  alert("Prospect Saved. Score: " + decision.score);
};
