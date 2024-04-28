

import { createSlice } from "@reduxjs/toolkit"
const  initialState = {
   cart : [],
}
const userSlice = createSlice({
  name: "user",
  initialState: initialState ,
  reducers: {
    addItem(state , action){
      state.cart.push(action.payload)
    },
    deleteItem(state, action){
      state.cart = state.cart.filter(cart => cart.id !== action.payload)
      
    },
    incItem(state, action){
     const obj =  state.cart.find(obj => obj.id === action.payload) 
     obj.quantity++;
     obj.unitPrice = obj.unitPrice * obj.quantity
    },
    decItem(state, action){
      const obj =  state.cart.find(obj => obj.id === action.payload) 
      obj.quantity--
    }
  }
})

export const {addItem , deleteItem ,incItem ,decItem} = userSlice.actions


export default userSlice.reducer  