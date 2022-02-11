import styled from "styled-components";

export const AppContainer = styled.div`
  /* background-color: red; */
  max-width: 425px;
  min-width: 300px;
  padding: 0.5rem;
  border-radius: 10px;
`;

export const Headding = styled.div`
  display: grid;
  place-content: center;
  text-align: center;
  margin-bottom: 1.5rem;

  .box-heading {
    width: 100%;
    border: 2px solid #fff;
    padding: 1rem 2rem;
    font-size: 2rem;
    border-radius: 10px;
    margin-top: 0.5rem;
  }
`;

export const Rows = styled.div`
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0.8rem 0;
    border-bottom: 1px solid #000;

    :first-child {
      border-top: 1px solid #000;
    }
    :last-child {
      border-bottom: none;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.2rem 0 1rem;

  button {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: #000;
    padding: 1rem 2rem;
    background-color: yellow;
    border-radius: 10px;
    cursor: pointer;
  }
`;
