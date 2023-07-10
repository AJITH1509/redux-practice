import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
  selectedTask: {},
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addtoTaskList: (state, action) => {
      const { taskList } = state;
      const id = Math.random() * 100;
      const task = { ...action.payload, id };
      taskList.push(task);
    },
    updateTaskList: (state, action) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    removeTask: (state, action) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload.id
      );
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
  },
});
export const { addtoTaskList, setSelectedTask, updateTaskList, removeTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
