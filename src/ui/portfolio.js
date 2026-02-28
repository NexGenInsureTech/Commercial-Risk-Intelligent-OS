
import { getState } from "../core/stateManager.js";
import { aggregatePortfolio } from "../core/portfolioEngine.js";

export function renderPortfolio(container) {
  const data = getState().prospects;
  const summary = aggregatePortfolio(data);

  container.innerHTML = `
    <div class="card">
      <h2>Portfolio Overview</h2>
      <p>Total: ${summary.total}</p>
      <p>High Risk: ${summary.highRisk}</p>
      <p>Average Score: ${summary.avgScore}</p>
    </div>
  `;
}
