import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, task: "Work on next project today at afternoon" , status : "pendding"  },
  {
    id: 2,
    task: "Buy a boat before the next rain in Karachi",
  },
  
];

const taskReducer = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    pin: (state, action) => {
      return state.map((item: any) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            status : "complete",
            state: "TASK_PINNED",
          };
        } else {
          return item;
        }
      });
    },

    remove: (state, action) => {
      
      return state.filter(item => item.id !== action.payload.id)
    },

    add: (state, action) => {
      let id = 0;

      if (state.length !== undefined && state.length !== null) {
        id = (state.length + 1);
      }

      return [
        ...state,
        { id: id, task: action.payload.task, state: "TASK_INBOX" , check : action.payload.check , status : action.payload.status },
      ];
    },
  },
});

const store = configureStore({
  reducer: taskReducer.reducer,
});

export const { pin, remove, add } = taskReducer.actions;

export { taskReducer, store };
