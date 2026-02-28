
const state = {
  currentRoute: "dashboard",
  prospects: []
};

const listeners = [];

export function getState() {
  return state;
}

export function setState(newState) {
  Object.assign(state, newState);
  listeners.forEach(cb => cb(state));
}

export function subscribe(cb) {
  listeners.push(cb);
}
