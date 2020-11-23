import axios from "axios";
import { gameDetailsUrl, gameScreenshotsUrl } from "../api";

export const loadGameDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const gameDetailsData = await axios.get(gameDetailsUrl(id));
  const gameScreenshotsData = await axios.get(gameScreenshotsUrl(id));
  dispatch({
    type: "GET_GAME_DETAILS",
    payload: {
      gameDetails: gameDetailsData.data,
      gameScreenshots: gameScreenshotsData.data,
    },
  });
};
