import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { keyBy } from "lodash";
import { AppThunk, RootState } from "../../app/store";
import { requestSuccessAPI } from "../../lib/api";
import { mockOrder, OrderDTO } from "./types";

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

export const orderDetailSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<OrderDTO[]>) => ({
      ...state,
      orders: action.payload,
      ordersById: keyBy(action.payload, "id"),
      orderLoading: false,
    }),
    loadingOrder: (state) => ({
      ...state,
      orderLoading: true,
    }),
    loadingOrderError: (state) => ({
      ...state,
      orderLoading: false,
      orderLoadingError: true,
    }),
  },
});

export const {
  setOrder,
  loadingOrder,
  loadingOrderError,
} = orderDetailSlice.actions;

export const getOrderById = (orderId: string): AppThunk => async (dispatch) => {
  const orders = await requestSuccessAPI([mockOrder]);

  dispatch(setOrder(orders));
};

export const getOrderByContainerId = (orderId: string): AppThunk => async (
  dispatch
) => {
  const orders = await requestSuccessAPI([mockOrder]);

  dispatch(setOrder(orders));
};

export const getOrderByBusinessId = (orderId: string): AppThunk => async (
  dispatch
) => {
  const orders = await requestSuccessAPI([mockOrder]);

  dispatch(setOrder(orders));
};

export const getOrderByLoadId = (orderId: string): AppThunk => async (
  dispatch
) => {
  const orders = await requestSuccessAPI([mockOrder]);

  dispatch(setOrder(orders));
};

export const orderSelector = (state: RootState, orderId: string) =>
  state.order.ordersById[orderId];

export default orderDetailSlice.reducer;
