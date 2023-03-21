export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICarItem {
  product: IProduct;
  quantity: number;
}

export interface ICarState {
  items: ICarItem[];
  failedStockCheck: number[];
}