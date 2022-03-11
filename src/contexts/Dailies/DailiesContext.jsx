import { toast } from "react-toastify";

import { api } from "../../assets/api";
import sumDailies from "../../utils/sumDailies";

const { createContext, useContext, useReducer, useEffect } = require("react");

export const DailiesContext = createContext();

const INITIAL_STATE = {
  debit: 0,
  dailies: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DAILIES": {
      const listDailies = state.dailies;

      listDailies.map((daily) => {
        if (daily.id == action.payload.id) {
          daily.type = action.payload.type;
          daily.date = action.payload.date;
          daily.value = action.payload.value;
        }
      });

      return { ...state, dailies: [...listDailies] };
    }

    case "SET_DAILIES":
      return { ...state, dailies: [action.payload, ...state.dailies] };

    case "GET_DAILIES":
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
      const { data } = await api.post("/createDaily", daily);

      dispatch({ type: "SET_DAILIES", payload: data });
      dispatch({ type: "SET_DEBIT", payload: state.debit + data.value });

      toast.success("Salvo com Sucesso !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const updateDaily = async (daily) => {
    try {
      const { data } = await api.post("/updateDaily", daily);

      dispatch({ type: "SET_DAILIES", payload: data });
      dispatch({ type: "SET_DEBIT", payload: state.debit + data.value });

      toast.success("Salvo com Sucesso !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get("/getDailies");

      const filteredData = data.filter(
        (daily) => daily.user_id === "b24c471e-47cb-49a2-9ffa-aac10ce9fdb6"
      );

      const sumTotal = sumDailies(filteredData);

      dispatch({ type: "GET_DAILIES", payload: filteredData });
      dispatch({ type: "SET_DEBIT", payload: sumTotal });
    };

    getData();
  }, []);

  return (
    <DailiesContext.Provider value={{ state, dispatch, addDaily,updateDaily }}>
      {children}
    </DailiesContext.Provider>
  );
};

export const StoreDailies = () => {
  return useContext(DailiesContext);
};
