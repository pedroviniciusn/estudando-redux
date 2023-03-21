import { Reducer } from "redux";
import produce from "immer";
import { ICarState } from "./types";

const INITIAL_STATE: ICarState = {
  items: [],
};

const cart: Reducer<ICarState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART": {
        const { product } = action.payload;

        draft.items.push({
          product,
          quantity: 1,
        });

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
