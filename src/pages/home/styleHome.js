import styled from "styled-components";

export const AppContainer = styled.div`
  /* border: 2px solid #efb7b7; */
  border-radius: 10px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 768px;

  position: relative;
  color: #ededed;
`;

export const Headding = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    color: #fff;
    font-size: 1.3rem;
    font-weight: bolder;
  }

  .box-heading {
    background-color: #bd4b4b;
    border-radius: 15px;
    margin-top: 0.5rem;
    padding: 1.4rem;

    width: 100%;
    max-width: 425px;

    display: flex;
    justify-content: center;

    sub {
      font-size: 1.2rem;
      margin-right: 0.5rem;
      color: #000;
    }

    span {
      color: #000;
      font-weight: bold;
      font-size: 2.5rem;
    }
  }
`;

export const Box = styled.div`
  background-color: #171717;
  height: 100%;
  border-top-left-radius: 4%;
  border-top-right-radius: 4%;

  overflow-y: scroll;

  table {
    width: 100%;
    border-spacing: 0;
  }
`;

export const Buttons = styled.div`
  background-color: #171717;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-top: 1px solid #444444;

  .btn {
    margin: 0.8rem auto;
    padding: 1rem 4rem;
    background-color: #bd4b4b;
    border-radius: 10px;
    cursor: pointer;
  }
`;
