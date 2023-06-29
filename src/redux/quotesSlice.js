import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";

export const fetchAllQuotes = createAsyncThunk("quotes/fetchAll", async () => {
  const res = await axios(
    "https://thesimpsonsquoteapi.glitch.me/quotes?count=70"
  );
  return res.data;
});

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllQuotes.fulfilled, (state, action) => {
        action.payload = action.payload.map((item) => ({ ...item, id: nanoid() }));
        console.log(action.payload)
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchAllQuotes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllQuotes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quotesSlice.reducer;
