const { createContext, useContext, useReducer, useEffect } = require("react");

export const GlobalContext = createContext();

const INITIAL_STATE = {};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const toggleModal = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  const toggleLoading = () => {
    dispatch({ type: "TOGGLE_LOADING" });
  };

  return (
    <GlobalContext.Provider
      value={{ state, dispatch, toggleModal, toggleLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const Store = () => {
  return useContext(GlobalContext);
};
