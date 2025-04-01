import React from "react";
import styled from "styled-components";

const CheckboxGroupWrapper = styled.div`
  width: 370px;
  height: 42px;
  position: relative;
  outline: 1px solid #9747ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 15px 8px 22px;
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
  outline: 1px solid #9747ff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  label {
    position: relative;
    width: 23px;
    height: 23px;
    cursor: pointer;
    border: 1px solid #bdbdbd;
    opacity: 0.6;
    border-radius: 6px;
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
    border: 3px solid #fff;
    border-radius: 6px;
    cursor: pointer;
  }

  label span::after {
    content: "";
    position: absolute;
    left: 4px;
    bottom: 3px;
    width: 8px;
    height: 16px;
    border: solid #E3E3E3;
    border-width: 0 1px 1px 0;
    transform: rotate(40deg);
    opacity: 0;
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
