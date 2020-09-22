import { OrderDTO } from "../types";

interface OrderState {
  orders: OrderDTO[];
  ordersById: { [key: string]: OrderDTO };
  orderLoading: boolean;
  orderLoadingError: boolean;
}

const initialState: OrderState = {
  orders: [],
  ordersById: {},
  orderLoading: false,
  orderLoadingError: false,
};

export default function reducer() {}
