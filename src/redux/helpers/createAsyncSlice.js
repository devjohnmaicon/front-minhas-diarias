import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../assets/api";

/**
 * Cria um slice com uma função assíncrona
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 */
const createAsyncSlice = (config) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      data: null,
      error: null,
      ...config.initialState,
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      fetchError(state, action) {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      },
      ...config.reducers,
    },
  });

  const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

  const asyncAction = (payload) => async (dispatch) => {
    try {
      dispatch(fetchStarted());

      const { url, method, hasBody } = config.fetchConfig(payload);

      const { data } = await api({
        url: url,
        method: method,
        data: hasBody,
      });

      return dispatch(fetchSuccess(data));
    } catch (error) {
      return dispatch(fetchError(error.message));
    }
  };

  return { ...slice, asyncAction };
};

export default createAsyncSlice;
