import { toast } from "react-toastify";
import { api } from "../../../assets/api";
import { calculateDebit, sumDebit } from "../../../utils/calculateDebit";
import { fetchData, fetchError, fetchStarted, handleDebt, newDaily, update } from './sliceUser';



export const getUser = (user_id) => async (dispatch) => {
  try {
    dispatch(fetchStarted());

    const {
      data: { user_name, email, dailies, created_at },
    } = await api.post("/getInfo", { user_id });

    dispatch(handleDebt(calculateDebit(dailies)));

    dispatch(
      fetchData({ user_name, email, dailies: dailies.reverse(), created_at })
    );
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

export const createDaily = (daily) => async (dispatch) => {
  try {
    const { data } = await api.post("/createDaily", daily);

    const { type, value } = data;

    dispatch(handleDebt(type == "2" ? -value : value));

    dispatch(newDaily(data));

    toast.success("Salvo com sucesso.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    dispatch(fetchError(error.message));

    toast.error("Erro ao adicionar diária.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const updateDaily = (daily) => async (dispatch) => {
  try {
    const { data } = await api.put("/updateDaily", daily);

    dispatch(update(data));

    toast.info("Atualizado com sucesso.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    dispatch(fetchError(error.message));

    toast.error("Erro ao editar diária.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

