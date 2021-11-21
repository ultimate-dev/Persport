/**
 * Props
 */
class ActionProps {
  type?: string;
}
class StateProps {
  search?: boolean;
  menuVisible?: boolean;
}

/**
 * State
 */
const initial_state: StateProps = {
  search: false,
  menuVisible: false,
};

export default function appReducer(
  state: StateProps = initial_state,
  action: ActionProps
) {
  switch (action.type) {
    case "SHOW_MENU":
      return {
        ...state,
        menuVisible: true,
      };

    case "HIDE_MENU":
      return {
        ...state,
        menuVisible: false,
      };

    case "SHOW_SEARCH":
      return {
        ...state,
        search: true,
      };

    case "HIDE_SEARCH":
      return {
        ...state,
        search: false,
      };

    default:
      return state;
  }
}
