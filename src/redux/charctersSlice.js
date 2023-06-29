import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (page) => {
    const res = await axios(
      `https://rickandmortyapi.com/api/character/?page=${page + 1}`
    );
    return res.data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    page: 0,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload.results];
        state.status = "succeeded";
        state.page++;

        if (state.page >= 6) {
          state.hasNextPage = false;
        }
      })
      .addCase(fetchCharacters.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.isLoading = "failed";
        state.error = action.error.message;
      });
  },
});

export default charactersSlice.reducer;
