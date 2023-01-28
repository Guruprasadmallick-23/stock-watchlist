import { ADD_TO_WATCHLIST } from "../actions/action";

const initialState = {
  watchlist: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
