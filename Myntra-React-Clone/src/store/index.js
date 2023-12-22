import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../reducer/itemReducer";
import fetchSlice from "../reducer/fetching";


const store=configureStore({
  reducer:{
    item:itemSlice,
    fetchStatus:fetchSlice
  }
})

export default store;