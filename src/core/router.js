
import { setState, getState } from "./stateManager.js";
import { renderDashboard } from "../ui/dashboard.js";
import { renderPortfolio } from "../ui/portfolio.js";
import { renderIntake } from "../modules/intakeModule.js";

const routes = {
  dashboard: renderDashboard,
  portfolio: renderPortfolio,
  intake: renderIntake
};

export function navigate(route, container) {
  const view = routes[route];
  if (!view) return;

  setState({ currentRoute: route });
  view(container);
}
