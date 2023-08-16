import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
    items: JSON.parse(localStorage.getItem('guestCart')) || [],
    },
    reducers: {
        addItemToCart(state, action) {
          const existingItem = state.items.find(item => item.itemObject.id === action.payload.itemObject.id);

          if(existingItem && existingItem.userCustomization === action.payload.userCustomization) {
            existingItem.quantity += 1;
          } else {
            state.items.push(action.payload);
            }

            localStorage.setItem('guestCart', JSON.stringify(state.items));
        },
        removeItemFromCart(state, action) {
          const existingItem = state.items.find(item => 
            item.itemObject.id === action.payload.itemObject.id && 
            item.userCustomization === action.payload.userCustomization
          );
      
          if (existingItem) {
            if (existingItem.quantity > 1) {
              existingItem.quantity -= 1;
            } else {
                state.items = state.items.filter(item => 
                  !(item.itemObject.id === action.payload.itemObject.id && 
                    item.userCustomization === action.payload.userCustomization)
                );
              }
          }
      
          localStorage.setItem('guestCart', JSON.stringify(state.items));
      },

      clearCart(state, action) {
        state.items = [];
        localStorage.removeItem('guestCart');
      }
    },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
