import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { api } from "../../assets/api";
import { calculateDebit, sumDebit } from "../../utils/calculateDebit";

export const dailiesSlice = createSlice({
  name: "dailies",
  initialState: {
    debt: 0,
    data: [],
    edition: {
      edit: false,
      dailyEdit: {},
    },
    modal: false,
    loading: false,
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },

    fetchData(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },

    fetchError(state, action) {
      state.data = null;
      state.loading = false;
      state.error = action.payload;
    },

    toggleModal(state, action) {
      state.modal = action.payload;
    },

    newDaily(state, action) {
      state.data.unshift(action.payload);
      state.loading = false;
      state.error = null;
    },

    setDailyEdition(state, action) {
      state.edition.edit = true;
      state.edition.dailyEdit = action.payload;
    },

    clearDailyEdition(state, action) {
      state.edition.edit = false;
      state.edition.dailyEdit = {};
    },

    update(state, action) {
      const list = state.data.map((daily) => ({ ...daily }));

      const updateList = list.map((item) => {
        if (item.id === action.payload.id) {
          item.type = action.payload.type;
          item.value = action.payload.value;
          item.date = action.payload.date;
          // item.description = action.payload.description
        }

        return item;
      });

      const newDebt = calculateDebit(updateList);

      state.debt = newDebt;
      state.data = updateList;
      state.loading = false;
      state.error = null;
    },

    handleDebt(state, action) {
      const currentValue = state.debt;

      state.debt = currentValue + action.payload;
    },
  },
});

export const {
  fetchStarted,
  fetchData,
  fetchError,
  toggleModal,
  newDaily,
  setDailyEdition,
  clearDailyEdition,
  update,
  handleDebt,
} = dailiesSlice.actions;

export const getDailies = (user_id) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const { data } = await api.post("/getDailies", { user_id });

    dispatch(handleDebt(calculateDebit(data)));

    dispatch(fetchData(data));
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

export default dailiesSlice.reducer;
