import React from 'react';
import styled from 'styled-components';

const MainTitle = styled.h1`
  text-align: center;
  padding: 20px 0;
  background: black;
  color: white;
  &:hover {
    background: white;
    color: black;
  }
`;

const NasaImg = styled.img`
  width: 100%;
  &:hover {
    transform: rotate(360deg);
    transition-duration: 10s;
  }
`;

const StyledP = styled.p`
  font-style: italic;

 `;

export default function ImageCard(props) {
  return (
    <MainTitle>
      <h1>NASA APOD: {props.title}</h1>
      <h1>
        Date: {props.date}
      </h1>
      <NasaImg src={props.hdurl}  />
    <StyledP>
      <p>
        <strong>Description:</strong> {props.explanation}
      </p>
      </StyledP>
    </MainTitle>
  );
}