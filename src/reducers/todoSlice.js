import { createSlice } from '@reduxjs/toolkit';
import { GetTodo } from '../api/api.js';

const initialState = {
    data: [],
    isLoading: false,
}

export const ToDoSlice = createSlice({
    name: "counter",
    initialState,
    reducers : {

        deleteUser: (state, action) => {
            state.data = state.data.filter((user) => user.id !== action.payload);
          },

    },
    extraReducers: (builder) => {
        builder.addCase(GetTodo.pending, (state, action) => {
          state.isLoading = true;
        });
        builder.addCase(GetTodo.fulfilled, (state, action) => {
          state.isLoading = false;
    
          state.data = action.payload;
        });
        builder.addCase(GetTodo.rejected, (state, action) => {
          console.log(action);
          state.isLoading = false;
        });
      },
})
export default ToDoSlice.reducer