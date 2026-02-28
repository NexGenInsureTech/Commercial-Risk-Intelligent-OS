
import { getState } from "../core/stateManager.js";

export function renderDashboard(container) {
  const data = getState().prospects;

  container.innerHTML = `
    <div class="card">
      <h2>Dashboard</h2>
      <p>Total Prospects: ${data.length}</p>
    </div>
  `;
}
