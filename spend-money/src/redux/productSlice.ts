import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../products";
import { ProductType } from "../types/product";

interface stateType {
  products: ProductType[];
  basket: ProductType[];
  money: number;
}

const initialState: stateType = {
  products: data,
  basket: [],
  money: 100000000000,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    buyProduct: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      state.products[index].amount += 1;

      const basketIndex = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );

      if (basketIndex > -1) {
        state.basket[basketIndex].amount += 1;
      } else {
        state.basket.push(state.products[index]);
      }

      state.money -= state.products[index].price;
    },

    sellProduct: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      state.products[index].amount > 0
        ? state.products[index].amount--
        : (state.products[index].amount = 0);

      const basketIndex = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );

      state.basket[basketIndex].amount - 1 > 0
        ? state.basket[basketIndex].amount--
        : state.basket.splice(basketIndex, 1);

      state.money += state.products[index].price;
    },
  },
});

export const { buyProduct, sellProduct } = productSlice.actions;

export default productSlice.reducer;
