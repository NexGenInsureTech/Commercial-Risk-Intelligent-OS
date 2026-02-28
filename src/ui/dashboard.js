
import { getAllProspects } from "../modules/mockDB.js";

export function renderDashboard(container) {
  const data = getAllProspects();
  container.innerHTML = `
    <div class="card">
      <h2>Total Prospects: ${data.length}</h2>
    </div>
  `;
}
