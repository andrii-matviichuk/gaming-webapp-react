import { useState } from "react";

//Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fadeIn } from "../animations";

//Redux & Route
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

function Nav() {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <StyledLogo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Gaming Website</h1>
      </StyledLogo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text"></input>
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.45rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    outline-color: #333;
    margin-right: 1rem;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.49rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: #fff;
    outline-color: #333;
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
