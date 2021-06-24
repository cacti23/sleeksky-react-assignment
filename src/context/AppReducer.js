export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIME':
      return {
        time: new Date().toLocaleTimeString(),
      };
    default:
      return state;
  }
};
