import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartItems:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.cartItems.push(action.payload);
        },
        removeItem:(state,action)=>{
            let findIdx= state?.cartItems?.findIndex(item=>item?.card?.info?.id===action?.payload?.card?.info?.id);
            state?.cartItems?.splice(findIdx,1);
        },
        clearCart:(state)=>{
            state.cartItems.length=0;
        }
    }
})

export const {addItems,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;