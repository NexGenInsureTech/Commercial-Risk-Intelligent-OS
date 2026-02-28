
import { generateDecision } from "../core/decisionOrchestrator.js";
import { getState, setState } from "../core/stateManager.js";

export function renderIntake(container) {
  container.innerHTML = `
    <div class="card">
      <h2>New Prospect Intake</h2>
      <input id="financialStrength" placeholder="Financial Strength (0-100)" /><br/><br/>
      <input id="industryRisk" placeholder="Industry Risk (0-100)" /><br/><br/>
      <input id="claimsHistory" placeholder="Claims History (0-100)" /><br/><br/>
      <button id="submitBtn">Submit</button>
    </div>
  `;

  document.getElementById("submitBtn").onclick = () => {
    const data = {
      financialStrength: Number(document.getElementById("financialStrength").value),
      industryRisk: Number(document.getElementById("industryRisk").value),
      claimsHistory: Number(document.getElementById("claimsHistory").value)
    };

    const decision = generateDecision(data);
    const current = getState().prospects;
    setState({ prospects: [...current, decision] });

    alert("Prospect Saved. Score: " + decision.score);
  };
}
