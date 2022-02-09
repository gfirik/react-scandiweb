import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  currency: "USD",
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          amount: newItem.amount,
          currency: newItem.currency,
          quantity: newItem.quantity,
          totalPrice: newItem.amount,
          selectedAttr: newItem.selectedAttr,
          selectedAttrs: [newItem.selectedAttr],
          attributes: newItem.attributes,
          image: newItem.image,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.amount;
        existingItem.selectedAttrs.push(newItem.selectedAttr);
      }
      state.totalQuantity++;
      state.totalAmount += newItem.amount;
    },

    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        return `Can't remove item (id: ${action.payload.id}) from basket because it doesn't exist`;
      }
      state.items = newBasket;
    },
  },
});

export const basketActions = basketSlice.actions;
export default basketSlice;
