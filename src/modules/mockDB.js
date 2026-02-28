
let store = [];

export function saveProspect(data) {
  store.push(data);
}

export function getAllProspects() {
  return store;
}
