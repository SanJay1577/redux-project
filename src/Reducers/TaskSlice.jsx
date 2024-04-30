import { createSlice } from "@reduxjs/toolkit";

const taskSchemaState = {
  taskOverAll: 20,
  taskCompleted: 0,
  taskRemaining: 20,
  taskPercentage: 0,
};
const taskSLice = createSlice({
  name: "task",
  initialState: taskSchemaState,
  reducers: {
    completeTask: (state) => {
      if (state.taskCompleted < 20) {
        state.taskCompleted = state.taskCompleted + 1;
        state.taskRemaining = state.taskRemaining - 1;
      }
    },
    calculatePercentage: (state) => {
      const percentage = (
        (state.taskCompleted / state.taskOverAll) *
        100
      ).toFixed(2);
      state.taskPercentage = percentage;
    },

    setTask: (state, action) => {
      console.log(action);
      if (state.taskOverAll >= 20) {
        state.taskOverAll = action.payload;
        state.taskRemaining = state.taskOverAll - state.taskCompleted;
      }
    },
  },
});

export const { calculatePercentage, completeTask, setTask } = taskSLice.actions;
export default taskSLice.reducer;
