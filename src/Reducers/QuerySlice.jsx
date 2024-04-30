import { createSlice } from "@reduxjs/toolkit";

const querySchema = {
  allQuery: 10,
  resolved: 0,
  remaining: 10,
};

const querySlice = createSlice({
  name: "query",
  initialState: querySchema,
  reducers: {
    resolveQuery: (state) => {
      if (state.allQuery <= 10) {
        state.resolved = state.resolved + 1;
        state.remaining = state.remaining - 1;
      }
    },
  },
});
export const { resolveQuery } = querySlice.actions;
export default querySlice.reducer;
