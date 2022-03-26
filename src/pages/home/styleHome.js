import styled from "styled-components";

export const AppContainer = styled.div`
  border: 4px solid #171717;
  border-radius: 10px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 768px;

  overflow: hidden;

  position: relative;
  color: #ededed;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  .user-name {
    span {
      font-weight: 700;
    }
  }

  .user-profile {
    cursor: pointer;

    height: 2rem;
    width: 2rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }

    .menu-config {
      position: absolute;
      right: 0;

      background-color: #444444;
      width: 5rem;

      border-radius: 5px;
      padding: 0.5rem;

      margin: 5px;

      span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.2rem;
        font-weight: bolder;
        cursor: pointer;
      }
    }
  }
`;

export const Headding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 0.5rem;

  margin-bottom: 1rem;

  h3 {
    color: #eeeeee;
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

    z-index: 2;

    span {
      color: #eeeeee;
      font-weight: bold;
      font-size: 2.5rem;
    }
  }
`;

export const Box = styled.div`
  background-color: #171717;
  height: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

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
  border-top: 1px solid #444444;

  .btn {
    margin: 0.8rem auto;
    padding: 1rem 4rem;
    background-color: #bd4b4b;
    border-radius: 10px;
    cursor: pointer;
  }
`;
