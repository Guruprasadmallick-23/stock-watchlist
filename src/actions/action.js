export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";

export const addToWatchlist = (stock) => {
  return {
    type: ADD_TO_WATCHLIST,
    payload: stock,
  };
};

export const openAlert = (type, message) => {
  return {
    type: "OPEN_SNACKBAR",
    payload: {
      type,
      message,
    },
  };
};

export const closeAlert = () => {
  return {
    type: "CLOSE_SNACKBAR",
  };
};
