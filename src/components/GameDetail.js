//Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function GameDetail() {
  const { gameDetails, gameScreenshots, isLoading } = useSelector(
    (state) => state.gameDetails
  );
  return (
    <>
      {!isLoading && (
        <CardShadow>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{gameDetails.name}</h3>
                <p>Rating: {gameDetails.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {gameDetails.platforms.map((data) => (
                    <h3 key={data.platform.id}> {data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={gameDetails.background_image} alt="game" />
            </Media>
            <Description>
              <p>{gameDetails.description_raw}</p>
            </Description>
            <div className="gallery">
              {gameScreenshots.results.map((screen) => (
                <img src={screen.image} key={screen.id} alt="Game Screenshot" />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;

const Detail = styled(motion.div)`
  background: #fff;
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  position: absolute;
  left: 10%;
  color: #333;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 3rem 0;
`;

export default GameDetail;
