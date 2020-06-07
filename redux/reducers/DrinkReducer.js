import { SETTOTALTODRINK, ADDAMOUNTDRANK } from "./constants";

const initialState = {
  totalToDrink: 2,
  amountDrank: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SETTOTALTODRINK: {
      return {
        ...state,
        totalToDrink:
          action.payload > 0
            ? parseInt(action.payload, 10)
            : initialState.totalToDrink,
      };
    }
    case ADDAMOUNTDRANK: {
      return { ...state, amountDrank: state.amountDrank + action.payload };
    }

    default:
      return state;
  }
};
