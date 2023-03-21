import { Reducer } from 'redux';
import { ICarState } from './types';

const INITIAL_STATE: ICarState = {
  items: [],
}

const cart: Reducer<ICarState> = () => {
  return INITIAL_STATE;
}

export default cart;