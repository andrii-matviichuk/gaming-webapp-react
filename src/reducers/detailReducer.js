const initState = {
  gameDetails: { platforms: [] },
  gameScreenshots: { results: [] },
  isLoading: true,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_GAME_DETAILS":
      return {
        ...state,
        gameDetails: action.payload.gameDetails,
        gameScreenshots: action.payload.gameScreenshots,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
