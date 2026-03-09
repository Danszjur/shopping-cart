import styled from "styled-components";

export const Nav = styled.nav`
  background-color: lightgray;
  width: 100vw;
  height: 90px;
  display: flex;
  align-items: center;
  position: relative;

  & > p {
    margin-left: 20px;
    color: white;
    font-size: 2rem;
    text-shadow: 2px 2px 10px black;
    user-select: none;
  }

  & > div {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 30px;
  }

  & > div > a {
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 1.5rem;
    background-color: hsl(0, 0%, 30%);
    color: white;
    text-decoration: none;

    &:hover {
      background-color: hsl(0, 0%, 50%);
      transform: translateY(-3px);
      box-shadow: 0 3px 3px black;
    }
    &:active {
      background-color: hsl(0, 0%, 60%);
      transform: translateY(0px);
      box-shadow: none;
    }
  }
`;
