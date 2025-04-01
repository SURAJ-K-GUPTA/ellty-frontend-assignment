import React, { useState } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
width: 370;
height: 60;
padding-top: 10px;
padding-right: 15px;
padding-bottom: 10px;
padding-left: 15px;
gap: 10px;


`;

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;



  width: 340px;
  height: 40px;
  


  background: #FFCE22; 
  border-radius: 4px;
  border: none;
  cursor: pointer;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0;
  vertical-align: middle;
  color: #1F2128;

  &:hover {
    background: #FFD84D;
  }

  &:active {
    background: #FFCE22; /* Keep the original color on click */
  }

  mix-blend-mode: normal;
`;

const Button = () => {
  // const [clicked, setClicked] = useState(false);

  return (
    <ButtonContainer>
      <ButtonWrapper
        // clicked={clicked}
        // onMouseDown={() => setClicked(true)}
        // onMouseUp={() => setClicked(false)}
      >
        Done
      </ButtonWrapper>
    </ButtonContainer>
  );
};

export default Button;
