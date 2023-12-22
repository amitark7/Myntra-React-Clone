import { createSlice } from "@reduxjs/toolkit";

const itemSlice=createSlice({
  name:'item',
  initialState:{bagItem:[],data:[]},
  reducers:{
    setInitial:(state,action)=>{
      state.data=action.payload;
    },
    addtoBag:(state,action)=>{
      state.bagItem.push(action.payload)
    },
    deleteItem:(state,action)=>{
      state.bagItem=state.bagItem.filter(itemId=>itemId!==action.payload)
    }
  }
})

export const itemAction=itemSlice.actions;
export default itemSlice.reducer;