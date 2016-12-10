const defaultState = {
  open: false
}
export const drawer = (state=defaultState, {type, payload}) => {
  switch (type) {
    case "TOGGLE_DRAWER":
      return { ...state, open: !state.open }
    default:
      return state;
  }
}