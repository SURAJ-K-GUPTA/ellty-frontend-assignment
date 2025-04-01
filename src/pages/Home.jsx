import React from "react";
import Card from "../components/Card";
import styled from "styled-components";


const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
 

`;

const Home = () => {
  return (
    <HomeWrapper>
      <Card />
    </HomeWrapper>
  );
};

export default Home;
