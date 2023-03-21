import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ICarState } from "./modules/cart/types";
import rootReducer from "./modules/rootReducer";

export interface IState {
  cart: ICarState;
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;
