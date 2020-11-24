import { smallerImg } from "../util";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

//Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";

//Images
import playstation4 from "../img/playstation.svg";
import playstation5 from "../img/ps5.svg";
import xboxX from "../img/xboxX.svg";
import xboxOne from "../img/xboxOne.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import steam from "../img/steam.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

function GameDetail({ pathId }) {
  const history = useHistory();
  const { gameDetails, gameScreenshots, isLoading } = useSelector(
    (state) => state.gameDetails
  );

  const exitDetailHandler = (e) => {
    if (e.target.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //Get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation4;
      case "PlayStation 5":
        return playstation5;
      case "Xbox One":
        return xboxOne;
      case "Xbox Series S/X":
        return xboxX;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
      case "macOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //Get rating stars
  const getStars = () => {
    const stars = [];
    const rating = Math.round(gameDetails.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull} />);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };
  return (
    <>
      {!isLoading && (
        <CardShadow
          className="shadow"
          onClick={exitDetailHandler}
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <h3>{gameDetails.name}</h3>
                <p>Rating: {gameDetails.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {gameDetails.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
                src={smallerImg(gameDetails.background_image, 1280)}
                alt="game"
              />
            </Media>
            <Description>
              <p>{gameDetails.description_raw}</p>
            </Description>
            <div className="gallery">
              {gameScreenshots.results.map((screen) => (
                <img
                  src={smallerImg(screen.image, 1280)}
                  key={screen.id}
                  alt="Game Screenshot"
                />
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
  z-index: 10;
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
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
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
  margin-top: 2rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 3rem 0;
`;

export default GameDetail;
