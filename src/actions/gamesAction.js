import axios from "axios";
import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchGame,
} from "../api";

export const loadGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesUrl());
  const upcomingGamesData = await axios.get(upcomingGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames: popularGamesData.data.results,
      upcomingGames: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchedGames = await axios.get(searchGame(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchedGames.data.results,
    },
  });
};
