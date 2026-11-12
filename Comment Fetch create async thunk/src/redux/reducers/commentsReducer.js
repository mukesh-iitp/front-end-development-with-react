import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { comments: [], isLoading: false, error: null };

export const getCommentsAsync = createAsyncThunk(
  "comments/fetch",
  async (_, thunkAPI) => {
    try {
      const reponse = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await reponse.json();
      thunkAPI.dispatch(fetchSuccess(data));
    } catch (e) {
      thunkAPI.dispatch(fetchError());
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: INITIAL_STATE,
  reducers: {
    fetchStart: (state, action) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
    },
    fetchError: (state, action) => {
      state.error = "Failed to fetch comments.";
      state.isLoading = false;
    },
  },
});

export const commentsReducer = commentsSlice.reducer;
export const { fetchStart, fetchSuccess, fetchError } = commentsSlice.actions;

export const commentsSelector = (state) => state.commentsReducer;
