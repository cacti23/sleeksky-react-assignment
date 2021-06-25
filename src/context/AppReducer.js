export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIME':
      return {
        ...state,
        time: new Date().toLocaleTimeString(),
      };
    case 'UPDATE_COUNT':
      return {
        ...state,
        count: state.count + 1,
        clickLog: [`You clicked at ${state.time}`, ...state.clickLog],
      };
    default:
      return new Error();
  }
};
