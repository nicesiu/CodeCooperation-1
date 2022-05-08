import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <CategoryWrap>
      {CategoryName.map((name, index) => (
        <CategoryBtn key={index}>{name}</CategoryBtn>
      ))}
    </CategoryWrap>
  );
};

// const CategoryWrap = styled.div`
//   display: flex;
//   max-width: 1400px;
//   width: 100vw;
//   height: 5%;
//   margin: auto;
//   justify-content: space-around;
//   background-color: darkslategrey;
// `;

const CategoryWrap = styled.div`
  max-width: 1400px;
  width: 100%;
  position: relative;
  display: flex;
  margin: auto;
  justify-content: center;
  /* align-items: center; */
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0px -15px 10px -15px #f0f0f0 inset;
  /* overflow-y: hidden; */
`;

const CategoryBtn = styled.li`
  text-align: center;
  list-style: none;
  font-weight: 300;
  font-size: 19px;
  padding: 8px 10px;
  height: 40px;
  width: auto;
  color: black;

  &:hover {
    font-weight: 500;
    transition: 0s ease;
  }
  cursor: pointer;
`;

const CategoryName = [
  "JavaScript",
  "Java",
  "Phython",
  "Node.js",
  "React",
  "C++",
  "Flask",
  "Django",
  "Vue",
  "Spring",
  "php",
  "Swift",
  "Kotlin",
  "TypeScript",
];

export default Category;