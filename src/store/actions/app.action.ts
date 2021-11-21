// Store
import store from "../store";

export function showMenu() {
  store.dispatch({
    type: "SHOW_MENU",
  });
}

export function hideMenu() {
  store.dispatch({
    type: "HIDE_MENU",
  });
}

export function showSearch() {
  store.dispatch({
    type: "SHOW_SEARCH",
  });
}

export function hideSearch() {
  store.dispatch({
    type: "HIDE_SEARCH",
  });
}
