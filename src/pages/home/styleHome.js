import styled from "styled-components";

export const AppContainer = styled.div`
  /* background-color: red; */
  border: 1px solid #efb7b7;
  max-width: 425px;
  min-width: 300px;
  border-radius: 10px;
  padding-top: 1rem;
`;

export const Headding = styled.div`
  display: grid;
  place-content: center;
  margin-bottom: 1.6rem;

  h3 {
    color: #fff;
  }

  .box-heading {
    background-color: #bd4b4b;
    padding: 1.2rem 2.2rem;
    border-radius: 15px;
    margin-top: 0.5rem;

    display: flex;

    sub {
      font-size: 1rem;
      margin-right: 0.4rem;
    }

    span {
      color: #000;
      font-weight: bold;
      font-size: 2.5rem;
    }
  }
`;

export const Box = styled.div`
  background-color: #eeeeee;
  border-radius: 30px 30px 10px 10px;
`;

export const Rows = styled.div`
  height: 310px;
  overflow-y: scroll;
  /* border-bottom: 2px solid rgba(0,0,0,.6); */
  box-shadow: -2px -9px 30px 7px rgba(0, 0, 0, 0.4);
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  /* margin: 1.6rem; */
  padding: 1rem 0 0.7rem;

  button {
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 1px;
    color: #000;
    padding: 1rem 4rem;
    background-color: #efb7b7;
    border-radius: 10px;
    cursor: pointer;
  }
`;
