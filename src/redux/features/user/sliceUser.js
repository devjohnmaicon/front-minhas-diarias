import { createSlice } from "@reduxjs/toolkit";
import { calculateDebit } from '../../../utils/calculateDebit';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user_name: "",
    emaill: "",
    data: [],
    debt: 0,
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
      state.user_name = action.payload.user_name;
      state.email = action.payload.email;
      state.data = action.payload.dailies;
      state.loading = false;
      state.error = null;
    },

    fetchError(state, action) {
      state.data = [];
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
    clearDailies(state) {
      state.debt = 0;
      state.data = [];
      state.dailyEdit = {};
      state.modal = false;
      state.loading = false;
      state.error = null;
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
  clearDailies,
} = userSlice.actions;

export default userSlice.reducer;
