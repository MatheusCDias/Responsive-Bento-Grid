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
    gap: clamp(1.5rem, 2.083vw, 3rem);
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
  gap: clamp(1.5rem, 1.667vw, 3rem);
  max-width: clamp(93rem, 77.5vw, 116.25rem);
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
    gap: 2rem;
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
`;

export const GridItems = styled.div`
  background-color: #eeeeee;
  font-weight: 300;
  cursor: pointer;
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
    aspect-ratio: 53/34;
    @media screen and (max-width: 650px) {
      grid-column: span 2;
      aspect-ratio: 1/1;
    }
  }
  &.box-two {
    grid-area: box2;
    grid-column: span 2;

    @media screen and (max-width: 1200px) {
      aspect-ratio: 17/36;
    }
    @media screen and (max-width: 650px) {
      aspect-ratio: 1/1;
    }
  }
  &.box-three {
    grid-area: box3;
    grid-column: span 2;
    aspect-ratio: 1/1;
    @media screen and (max-width: 650px) {
      aspect-ratio: 1/1;
    }
  }
  &.box-four {
    grid-area: box4;
    grid-column: span 3;
    aspect-ratio: 53/34;
    @media screen and (max-width: 650px) {
      grid-column: span 2;
      aspect-ratio: 1/1;
    }
  }
  &.box-five {
    grid-area: box5;
    grid-column: span 3;
    aspect-ratio: 53/34;
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
  &.box-six {
    grid-area: box6;
    grid-column: span 3;
    aspect-ratio: 53/34;
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
  &.box-seven {
    grid-area: box7;
    grid-column: span 2;
    aspect-ratio: 1/1;
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.8s ease-in-out;

  & .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: clamp(4.5rem, 3.75vw, 5.625rem); // 72px - 4.5rem
    max-height: 26.47%;

    & .main-header-content {
      display: flex;
      flex-direction: row;
      margin: 1.5rem 0 0 0.5rem;
      gap: 0.5rem;

      & .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #222220;
        height: clamp(1.125rem, 1.25vw, 1.875rem);
        user-select: none;
        font-variation-settings: "FILL" 1, "wght" 200, "GRAD" 0, "opsz" 40;
      }

      & .title {
        max-width: 6rem;
        white-space: nowrap;
      }
    }

    & h1,
    & h2 {
      display: flex;
      align-items: center;
      overflow: hidden;
      text-overflow: ellipsis;
      height: clamp(1.125rem, 1.25vw, 2rem);
    }

    & h1 {
      color: #222220;
      font-size: clamp(1.125rem, 1.25vw, 1.875rem); //24px - 1.5rem
      font-weight: 500;
      @media screen and (max-width: 1200px) {
        font-size: 1.5rem; // 16px - 1rem
      }
    }

    & h2 {
      color: #999990;
      font-size: clamp(0.5rem, 0.833vw, 1.25rem);
      font-weight: 300;
      @media screen and (max-width: 1200px) {
        font-size: 0.75rem; // 16px - 1rem
      }
    }

    & .tag {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      max-width: 6.4rem;
      height: clamp(1.125rem, 1.25vw, 1.875rem);
      margin: 1.5rem 1rem;
      gap: 0.5rem;
      user-select: none;
      color: #333330;

      & .material-symbols-outlined {
        height: 1rem;
        font-size: clamp(0.5rem, 0.833vw, 1.25rem);
        font-variation-settings: "FILL" 1, "wght" 200, "GRAD" 0, "opsz" 40;
      }

      & h3 {
        display: flex;
        align-items: center;
        justify-content: right;
        overflow: hidden;
        font-size: clamp(0.55rem, 0.625vw, 1rem);
        font-weight: 300;
        text-align: right;
        white-space: nowrap;
        overflow: hidden;
        text-transform: uppercase;
        @media screen and (max-width: 1200px) {
          font-size: 0.875rem;
        }
      }
    }
  }

  & .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-height: clamp(6.5rem, 6.667vw, 10rem);
    margin-block: clamp(0.25rem, 0.8vh, 0.5rem);
    margin-inline: clamp(1.5rem, 2.083vw, 3rem);
    padding-right: 0.5rem;
    gap: 0.25rem;
    overflow-y: auto;

    & p {
      display: -webkit-box;
      color: #333330;
      text-align: justify;
      font-size: 1rem; // 16px - 1rem
      font-weight: 400;
      -webkit-line-clamp: 5; /* número de linhas */
      -webkit-box-orient: vertical;
    }

    &::-webkit-scrollbar {
      width: clamp(2px, 0.208vw, 4px);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 0px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #333330;
      border-radius: 0px;
      border: 1px solid transparent;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555550;
    }
  }

  & .bottom {
    width: 100%;
    height: clamp(3.5rem, 2.917vw, 4.375rem); // 56px - 3.5rem
    max-height: 20.59%;
    background-color: #222220;

    & .bottom-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      margin-inline: clamp(
        1.5rem,
        2.083vw,
        3rem
      ); // 40px - clamp(1.5rem, 2.083vw, 3rem)

      & .see-more-button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        & a {
          text-decoration: none;

          &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            height: 1px;
            width: 0%;
            background-color: #eeeee0;
            transition: width 0.3s ease-in-out;
          }

          &:hover::after {
            width: 100%;
          }

          & button {
            display: flex;
            flex-direction: row;
            background-color: transparent;
            outline: none;
            border: none;
            cursor: pointer;
            user-select: none;

            & span {
              display: flex;
              align-items: center;
              height: 1.5rem;
              color: #eeeee0;
              font-family: "Roboto Condensed", sans-serif;
              font-size: clamp(0.5rem, 0.833vw, 1.25rem); // 16px - 1rem
              font-weight: 400;
              text-transform: uppercase;
              white-space: nowrap;

              @media screen and (max-width: 1200px) {
                font-size: 1rem; // 16px - 1rem
              }
            }
          }
        }
      }

      & .info {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 16rem;
        height: 42.86%;
        gap: 0.5rem;
        white-space: nowrap;
        user-select: none;

        &.material-symbols-outlined {
          height: 1rem;
          font-size: clamp(0.5rem, 0.833vw, 1.25rem);
          color: #eeeee0;
        }

        & span {
          display: flex;
          align-items: center;
          height: 1.5rem;
          font-size: clamp(
            0.55rem,
            0.625vw,
            1rem
          ); // 12px - clamp(0.55rem, 0.625vw, 1rem)
          font-weight: 300;
          color: #eeeee0;
          overflow: hidden;
          text-overflow: ellipsis;
          text-transform: uppercase;

          @media screen and (max-width: 1200px) {
            font-size: 0.75rem; // 12px
          }
        }
      }
    }
  }

  @media screen and (min-width: 650px) {
    .box-two & .top {
      max-height: 12.5%; // Box 2 occupies two lines, so its size requires greater heights
    }

    .box-two & .content {
      max-height: clamp(28rem, 23.333vw, 34rem);
    }

    .box-two & .bottom {
      max-height: 9.73%;
    }
  }
`;
