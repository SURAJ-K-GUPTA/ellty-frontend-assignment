import React from "react";
import styled from "styled-components";

const CheckboxGroupWrapper = styled.div`
  width: 370px;
  height: 42px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 15px 8px 22px;

  &:hover label span::after {
    opacity: 1;
  }
  &:active label{
    outline: 2px solid rgba(36, 105, 246, 0.1);

  }

  &:active label span::after{
    border: solid #878787;
    border-width: 0 1px 1px 0;
    opacity: 1;
  }

`;

const LabelWrapper = styled.div`
  width: 64px;
  height: 18px;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1f2128;
  cursor: pointer;
`;

const CheckBoxWrapper = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  label {
    position: relative;
    width: 23px;
    height: 23px;
    cursor: pointer;
    border: 1px solid rgba(205, 205, 205, 0.6);
    /* opacity: 0.6; */
    border-radius: 6px;
  }
  label:active{
    outline: 2px solid rgba(36, 105, 246, 0.1);

  }





  label:hover {
    opacity: 1;
    border: 1px solid #BDBDBD
  }

  input {
    height: 100%;
    width: 100%;
    opacity: 0;
    cursor: pointer;
    position: absolute;
  }

  label span {
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    /* border: 3px solid #fff; */
    border-radius: 6px;
    cursor: pointer;
  }
  


  label span::after {
    content: "";
    position: absolute;
    left: 7px;
    bottom: 6px;
    width: 7px;
    height: 14px;
    border: solid rgba(227, 227, 227, 1);
    border-width: 0 1.2px 1.2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  


  label span:hover::after {
    opacity: 1;
  }


  label span:active::after {
    border: solid #878787;
    border-width: 0 1px 1px 0;
    opacity: 1;
  }
  input:checked ~ span {
  background-color: rgba(36, 105, 246, 1);
  border: 0;
}

input:checked ~ span:hover {
  background-color: rgba(80, 135, 248, 1);
}



  input:checked ~ span::after {
    opacity: 1;
  }
`;

const CheckboxGroup = ({ label, isChecked, toggleCheckbox, index }) => {
  return (
    <CheckboxGroupWrapper onClick={toggleCheckbox}>
      <LabelWrapper>{label}</LabelWrapper>
      <CheckBoxWrapper>
        <label htmlFor={`customCheckbox${index}`}>
          <input
            type="checkbox"
            id={`customCheckbox${index}`}
            checked={isChecked}
            onClick={(e) => e.stopPropagation()}
            onChange={(e)=>e.stopPropagation()}
          />
          <span></span>
        </label>
      </CheckBoxWrapper>
    </CheckboxGroupWrapper>
  );
};



export default CheckboxGroup;
