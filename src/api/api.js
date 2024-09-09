import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Api = "https://66dbfa5647d749b72aca69ed.mockapi.io/api";

export const GetTodo = createAsyncThunk("counter/GetTodo", async () => {
  try {
    const { data } = await axios.get(Api);
    return data;
  } catch (error) {
    console.error(error);
  }
});
export const DeleteTodo = createAsyncThunk(
  "counter/DeleteTodo",
  async (id, { dispatch }) => {
    try {
      const { data } = await axios.delete(`${Api}/${id}`);
      dispatch(GetTodo());
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);