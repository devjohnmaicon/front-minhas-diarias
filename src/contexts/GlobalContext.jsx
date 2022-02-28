const { createContext, useContext, useReducer } = require("react");

export const GlobalContext = createContext();

const INITIAL_STATE = {
  loading: false,
  modal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return { ...state, modal: !state.modal };

    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const toggleModal = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  return (
    <GlobalContext.Provider value={{ state, dispatch, toggleModal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const Store = () => {
  return useContext(GlobalContext);
};
