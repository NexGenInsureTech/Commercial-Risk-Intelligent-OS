
import { renderDashboard } from "./ui/dashboard.js";
import { renderPortfolio } from "./ui/portfolio.js";
import { renderIntake } from "./modules/intakeModule.js";

const mainView = document.getElementById("mainView");

window.navigate = function(page) {
  if (page === "dashboard") renderDashboard(mainView);
  if (page === "portfolio") renderPortfolio(mainView);
  if (page === "intake") renderIntake(mainView);
};

navigate("dashboard");
