import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import CheckboxGroup from "./CheckboxGroup";
import Line from "./Line";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 370px;
  height: 326px;
  border: 1px solid #eeeeee;
  position: absolute;

  padding: 10px 0 10px 0;

  box-shadow: 0px 8px 15px 0px #1414141f,
    /* First box-shadow */ 0px 0px 4px 0px #1414141a; /* Second box-shadow */
`;

const CheckboxGroupWrapper = styled.div`
  height: 164px;
  overflow: scroll;

  /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for Internet Explorer and Edge */
  -ms-overflow-style: none;
`;

const Card = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedPages, setCheckedPages] = useState(Array(6).fill(false));

  // Handle the change of individual page checkboxes
  const handlePageChange = (index, checked) => {
    const updatedCheckedPages = [...checkedPages];
    updatedCheckedPages[index] = checked;
    setCheckedPages(updatedCheckedPages);

    // If all checkboxes are checked, set 'allChecked' to true
    setAllChecked(updatedCheckedPages.every((checked) => checked));
  };

  // Handle "All pages" checkbox
  const handleAllPagesChange = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);
    setCheckedPages(Array(6).fill(newCheckedState)); // Update all individual checkboxes
  };

  return (
    <CardWrapper>
      <CheckboxGroup
        label={"All pages"}
        isChecked={allChecked}
        toggleCheckbox={handleAllPagesChange}
      />
      <Line />
      <CheckboxGroupWrapper>
        {Array.from({ length: 6 }, (_, index) => (
          <CheckboxGroup
            key={index}
            label={`Page ${index + 1}`}
            isChecked={checkedPages[index]}
            toggleCheckbox={(e) => {
              handlePageChange(index, !checkedPages[index]);
            }}
          />
        ))}
      </CheckboxGroupWrapper>
      <Line />
      <Button />
    </CardWrapper>
  );
};

export default Card;
