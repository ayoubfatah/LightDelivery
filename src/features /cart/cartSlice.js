

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
     const item =  state.cart.find(item => item.id === action.payload) 
     item.quantity++;
     item.totalPrice = item.unitPrice * item.quantity
    },
    decItem(state, action){
     const item =  state.cart.find(item => item.id === action.payload) 
     item.quantity--
     item.totalPrice = item.unitPrice * item.quantity

    },
    clearCart(state){
      state.cart = []
    }
  }
})


export const {addItem , deleteItem ,incItem ,decItem ,clearCart} = userSlice.actions


export default userSlice.reducer  

export  const getCurrentQuantityById = id => state => state.cart.cart.find((item)=> item.id === id )?.quantity ?? 0 ;