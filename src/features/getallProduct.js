import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/BaseUrl";
import { getRequest, postRequest } from "../utils/AllApiFun";

const initialState = {
  allproductData: [],
  isFetching: false,
};

export const Getproducts = createAsyncThunk("getproducts", async () => {
  const result = await getRequest(`${BASE_URL}/products`, "get");
  console.log(result, "result");
  return result;
});

const allProductReducer = createSlice({
  name: "allproduct",
  initialState,
  reducers: {},
  extraReducers: {
    [Getproducts.fulfilled]: (state, action) => {
      const data = action.payload;
      state.allproductData = data;
      state.isFetching = false;
      return state;
    },
    [Getproducts.pending]: (state, action) => {
      const data = action.payload;
      state.allproductData = data;
      state.isFetching = true;
      return state;
    },
    [Getproducts.rejected]: (state, action) => {
      const data = action.payload;
      state.allproductData = data;
      state.isFetching = false;
      return state;
    },
  },
});

export default allProductReducer.reducer;
