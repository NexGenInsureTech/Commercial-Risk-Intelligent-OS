
import { getAllProspects } from "../modules/mockDB.js";
import { aggregatePortfolio } from "../core/portfolioEngine.js";

export function renderPortfolio(container) {
  const data = getAllProspects();
  const summary = aggregatePortfolio(data);

  container.innerHTML = `
    <div class="card">
      <h2>Portfolio Summary</h2>
      <p>Total: ${summary.total}</p>
      <p>High Risk: ${summary.highRisk}</p>
      <p>High Risk %: ${summary.highRiskPercentage}%</p>
    </div>
  `;
}
