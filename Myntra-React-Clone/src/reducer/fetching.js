import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "fetchStatus",
  initialState: { fetchingDone: false, currentlyfetching: false },
  reducers: {
    Fetching_Done: (state) => {
      state.fetchingDone = true;
    },
    Fetching_Start: (state) => {
      state.currentlyfetching = true;
    },
    Fetching_Finished: (state) => {
      state.currentlyfetching = false;
    },
  },
});

export const fetchAction = fetchSlice.actions;
export default fetchSlice.reducer;
