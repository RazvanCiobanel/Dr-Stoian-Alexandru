import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export const getTitles = createAsyncThunk(
  "titles/getTitles",
  async () => {
    const res = await fetch("http://localhost:5000/titles");
    const titles = await res.json();
    return titles;
  }
);

const titlesSlice = createSlice({
    name: 'titles',
    initialState: {
        titles: [],
        loading: false,
    },
    extraReducers: {
        [getTitles.pending]: (state, action) => {
            state.loading = true;
        },
        [getTitles.fulfilled]: (state,action) => {
            state.loading = false;
            state.titles = action.payload;
        },
        [getTitles.rejected]: (state,action) => {
            state.loading = false
        }
    }
})

export default titlesSlice.reducer