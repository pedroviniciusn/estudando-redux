import { ActionTypes, IProduct } from "./types";

export function addProductsToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductsToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductsToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductsToCartSuccess,
    payload: {
      product,
    },
  };
}


export function addProductsToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductsToCartFailure,
    payload: {
      productId,
    },
  };
}

