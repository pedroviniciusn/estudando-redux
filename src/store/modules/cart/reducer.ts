import { Reducer } from "redux";
import { ICarState } from "./types";

const INITIAL_STATE: ICarState = {
  items: [],
};

const cart: Reducer<ICarState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      const { product } = action.payload;

      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quantity: 1,
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
};

export default cart;
