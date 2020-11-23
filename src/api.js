//Base URL
const base_url = "https://api.rawg.io/api/";

//Current date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYearCurrentDay = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYearCurrentDay = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?dates=${lastYearCurrentDay},${currentDate}&ordering=-rating&page_size=10`;

//Upcoming games
const upcoming_games = `games?dates=${currentDate},${nextYearCurrentDay}&ordering-=added&page_size=10`;

//Upcoming games
const new_games = `games?dates=${lastYearCurrentDay},${currentDate}&ordering-=realesed&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;

export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}`;

export const gameScreenshotsUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;

export const searchGame = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;
