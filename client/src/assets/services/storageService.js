export function get(item) {
  return window.localStorage.getItem(item);
}

export function getJSON(item) {
  return JSON.parse(window.localStorage.getItem(item));
}

export function set(item, value) {
  window.localStorage.setItem(item, value);
}

export function setJSON(item, jsonValue) {
  window.localStorage.setItem(item, JSON.stringify(jsonValue));
}

export function remove(item) {
  window.localStorage.removeItem(item);
}
