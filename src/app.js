
import { navigate } from "./core/router.js";
import { subscribe, getState } from "./core/stateManager.js";

const mainView = document.getElementById("mainView");
const buttons = document.querySelectorAll("[data-route]");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    navigate(btn.dataset.route, mainView);
    updateActive(btn.dataset.route);
  });
});

function updateActive(route) {
  buttons.forEach(b => b.classList.remove("active"));
  document.querySelector(`[data-route="${route}"]`).classList.add("active");
}

subscribe((state) => {
  navigate(state.currentRoute, mainView);
});

navigate("dashboard", mainView);
updateActive("dashboard");
