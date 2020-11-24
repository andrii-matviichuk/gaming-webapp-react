import { Link } from "react-router-dom";
import { smallerImg } from "../util";
//Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { popUp } from "../animations";

//Redux
import { useDispatch } from "react-redux";
import { loadGameDetails } from "../actions/detailAction";

function Game({ id, name, released, image }) {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadGameDetails(id));
    document.body.style.overflow = "hidden";
  };
  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallerImg(image, 640)} alt={name + " image"} />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: scroll;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
