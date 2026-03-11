import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  height: 450px;
  border: 2px black solid;
  display: flex;
  flex-direction: column;
  transition-property: all;
  transition-duration: 50ms;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 10px lightgray;
  }

  & > img {
    width: 300px;
    height: 200px;
    object-fit: fit;
  }
  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgoldenrodyellow;
    border-top: 1px black solid;
    & > p {
      font-size: 1.5;
      border-bottom: 1px gray solid;
      width: 80%;
      text-align: center;
      padding-bottom: 5px;
      margin-top: 5px;
    }
    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  .quantity-input {
    height: 40px;
    width: 50%;
    font-size: 2rem;
    text-align: center;
    margin: 0 15px;
    border-radius: 20px;
  }
  .card-bottom-part {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;

    & > p {
      font-size: 2rem;
      margin: 0;
      border-bottom: 1px gray solid;
      padding: 0 4px;
    }
  }
`;
