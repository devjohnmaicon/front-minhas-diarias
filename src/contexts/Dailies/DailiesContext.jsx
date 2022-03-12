import { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "react-toastify";

import { api } from "../../assets/api";

export const DailiesContext = createContext();

const INITIAL_STATE = {
  debit: 0,
  dailies: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DAILIES":
      return { ...state, dailies: action.payload };

    case "SET_DEBIT":
      return { ...state, debit: action.payload };

    default:
      return state;
  }
};

export const DailiesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const addDaily = async (daily) => {
    try {
      await api.post("/createDaily", daily);

      toast.success("Salvo com Sucesso !", {
        position: toast.POSITION.TOP_RIGHT,
      });

      getData();
    } catch (e) {
      console.log(e);
    }
  };

  const updateDaily = async (daily) => {
    try {
      await api.put("/updateDaily", daily);

      toast.success("Salvo com Sucesso !", {
        position: toast.POSITION.TOP_RIGHT,
      });

      getData();
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    const { data } = await api.get("/getDailies");

    const filteredData = data.filter(
      (daily) => daily.user_id === "b24c471e-47cb-49a2-9ffa-aac10ce9fdb6"
    );

    const sumTotal = filteredData
      .map((daily) => {
        if (daily.type == "2") {
          return -daily.value;
        }

        return daily.value;
      })
      .reduce((prev, current) => prev + current);

    dispatch({ type: "SET_DAILIES", payload: filteredData });
    dispatch({ type: "SET_DEBIT", payload: sumTotal });
  };

  return (
    <DailiesContext.Provider
      value={{ state, dispatch, getData, addDaily, updateDaily }}
    >
      {children}
    </DailiesContext.Provider>
  );
};

export const StoreDailies = () => {
  return useContext(DailiesContext);
};
