import { loadGames } from "../actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import Game from "../components/Game";
import { upcomingGamesUrl } from "../api";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Get data from store
  const { popularGames, upcomingGames, newGames } = useSelector(
    (state) => state.games
  );
  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcomingGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
`;

export default Home;
