import { Reducer } from "redux";
import produce from "immer";
import { ActionTypes, ICarState } from "./types";

const INITIAL_STATE: ICarState = {
  items: [],
  failedStockCheck: [],
};

const cart: Reducer<ICarState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductsToCartSuccess: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }

      case ActionTypes.addProductsToCartFailure: {
        draft.failedStockCheck.push(action.payload.productId);

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default cart;
