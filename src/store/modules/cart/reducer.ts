import { Reducer } from 'redux';
import { ICarState } from './types';

const INITIAL_STATE: ICarState = {
  items: [],
}

const cart: Reducer<ICarState> = (state, action) => {
  console.log(state, action)
  return INITIAL_STATE;
}

export default cart;