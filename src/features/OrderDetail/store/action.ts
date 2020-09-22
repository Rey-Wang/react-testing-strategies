import { AppThunk } from "../../../app/store";
import { requestSuccessAPI } from "../../../lib/api";
import { mockOrder, OrderDTO } from "../types";

export const ADD_ORDERS = "trips/order/ADD_ORDERS";
export const ORDER_LOADING = "trips/order/ORDER_LOADING";
export const ORDER_LOADING_ERROR = "trips/order/ORDER_LOADING_ERROR";

const orderLoading = () => ({ type: ORDER_LOADING });
const addOrders = (orders: OrderDTO[]) => ({ type: ORDER_LOADING, orders });
const orderLoadingError = (error: Error) => ({
  type: ORDER_LOADING,
  error,
});

export const getOrderById = (orderId: string): AppThunk => async (dispatch) => {
  try {
    dispatch(orderLoading);
    const orders = await requestSuccessAPI([mockOrder]);
    dispatch(addOrders(orders));
  } catch (error) {
    dispatch(orderLoadingError(error));
  }
};
