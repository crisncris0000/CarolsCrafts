import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
    items: JSON.parse(localStorage.getItem('guestCart')) || [],
    },
    reducers: {
        addItemToCart(state, action) {

            const existingItem = state.items.find(item => item.itemObject.id === action.payload.itemObject.id);

            if(existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push(action.payload);
            }

            localStorage.setItem('guestCart', JSON.stringify(state.items));
        },
        removeItemFromCart(state, action) {
            const existingItem = state.items.find(item => item.itemObject.id === action.payload.itemObject.id);

            if (existingItem) {
              if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
              } else {
                state.items = state.items.filter(item => item.itemObject.id !== action.payload.itemObject.id);
              }
            }

            localStorage.setItem('guestCart', JSON.stringify(state.items));
        },
    },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
