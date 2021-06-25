export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIME':
      return {
        time: new Date().toLocaleTimeString(),
      };
    case 'UPDATE_COUNT':
      return {
        count: state.count + 1,
      };
    default:
      return new Error();
  }
};
