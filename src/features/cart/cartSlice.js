import {createSlice} from '@reduxjs/toolkit';
import itemsInCart from '../../assets/cartitems';

const initialState = {
    cartItems: itemsInCart,
    amount: 2,
    total: 0,
    isLoading: true
    
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item)=> item.id !== itemId)
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
            
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.value;
            });
            state.amount = amount;
            state.total = total;
        }
        
    }
})
export const { removeItem, increase, decrease,calculateTotals } = cartSlice.actions;
export default cartSlice.reducer