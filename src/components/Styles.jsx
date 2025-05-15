import styled from "styled-components";

export const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 93rem;
  margin: 0 auto 1rem auto;

  button {
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    background-color: #333333;
    color: #eeeeee;
    font-weight: 400;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &.active {
      background-color: #666666;
      color: white;
    }
  }
  
  @media screen and (min-width: 2560px) {
    gap: 2.5rem;
    max-width: 116.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(10, 1fr);
  grid-template-areas:
    "box1 box2 box3 box4"
    "box5 box2 box6 box7";
  gap: 2rem;
  aspect-ratio: 31 / 12;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      "box1 box2"
      "box5 box2"
      "box3 box4"
      "box6 box7";
    max-width: 45.5rem;
    aspect-ratio: 91 / 148;
  }

  @media screen and (max-width: 650px) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "box1"
      "box2"
      "box3"
      "box4";
    max-width: 17rem;
    aspect-ratio: 17 / 74;
  }

  @media screen and (min-width: 2560px) {
    max-width: 116.25rem;
    gap: 2.5rem;
  }
`;

export const GridItems = styled.div`
  background-color: #eeeeee;
  font-weight: 300;
  cursor: pointer;
  box-sizing: border-box;
  transition: transform 0.8s ease-in-out, filter 0.8s ease-in-out,
    opacity 0.8s ease-in-out;

  opacity: ${({ dimmed }) => (dimmed ? 0.65 : 1)};
  filter: ${({ dimmed }) =>
    dimmed ? "grayscale(0.65) opacity(0.65)" : "none"};
  pointer-events: ${({ dimmed }) => (dimmed ? "none" : "auto")};

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(1rem 1rem 1rem rgba(0, 0, 0, 0.25));
  }

  &.box-one {
    grid-area: box1;
    grid-column: span 3;
    box-sizing: border-box;
    @media screen and (max-width: 650px) {
      grid-column: span 2;
      aspect-ratio: 1/1;
    }
  }
  &.box-two {
    grid-area: box2;
    grid-column: span 2;
    @media screen and (max-width: 650px) {
      aspect-ratio: 1/1;
    }
  }
  &.box-three {
    grid-area: box3;
    grid-column: span 2;
    @media screen and (max-width: 650px) {
      aspect-ratio: 1/1;
    }
  }
  &.box-four {
    grid-area: box4;
    grid-column: span 3;
    @media screen and (max-width: 650px) {
      grid-column: span 2;
      aspect-ratio: 1/1;
    }
  }
  &.box-five {
    grid-area: box5;
    grid-column: span 3;
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
  &.box-six {
    grid-area: box6;
    grid-column: span 3;
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
  &.box-seven {
    grid-area: box7;
    grid-column: span 2;
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
`;

export const BoxContent = styled.div`

`;
