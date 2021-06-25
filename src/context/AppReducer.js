export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIME':
      return {
        time: new Date().toLocaleTimeString(),
      };
    case 'UPDATE_CLICK':
      return {
        click: state.click + 1,
      };
    default:
      return state;
  }
};
