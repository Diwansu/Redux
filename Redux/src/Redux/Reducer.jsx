const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase":
      return {
        count: state.count + 1,
      };
    case "decrease":
      
      return {
        count: state.count > 0 ? state.count - 1 : 0,
      };
    default:
      return state;
  }
};

export default reducer;
