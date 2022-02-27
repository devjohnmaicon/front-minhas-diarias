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

  @media screen and (min-width: 768px) {
    height: 95%;
    margin: 1.5rem auto;
    /* border: 2px solid #efb7b7; */
  }
`;

export const Headding = styled.div`
  padding: 1rem;

  h3 {
    color: #fff;
    font-size: 1.3rem;
    font-weight: bolder;
  }

  .box-heading {
    background-color: #bd4b4b;
    padding: 1.2rem 2.2rem;
    border-radius: 15px;
    margin-top: 0.5rem;

    display: flex;

    sub {
      font-size: 1.2rem;
      margin-right: 0.5rem;
    }

    span {
      color: #000;
      font-weight: bold;
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .box-heading {
      margin-top: 1rem;
      padding: 1.5rem 2.5rem;
    }
  }
`;

export const Box = styled.div`
  background-color: #eeeeee;
  height: 100%;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;

  padding: 0.4rem;
  overflow-y: scroll;

  table {
    width: 100%;
    border-spacing: 0;
  }

  @media screen and (min-width: 768px) {
    border-top-left-radius: 2%;
    border-top-right-radius: 2%;
  }
`;

export const Buttons = styled.div`
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-top: 1px solid rgba(0, 0, 0, 0.6);

  button {
    margin: 0.8rem auto;
    padding: 1rem 4rem;
    background-color: #efb7b7;
    border-radius: 10px;
    cursor: pointer;
  }
`;

