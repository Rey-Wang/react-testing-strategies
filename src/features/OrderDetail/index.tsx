import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useOrderHeader } from "./hooks";
import { getOrderById } from "./slice";

type Props = {
  orderId: string;
};

export function OrderDetail({ orderId }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const order = useSelector(
    (state: RootState) => state.order.ordersById[orderId]
  );
  const { journeyState } = useOrderHeader(orderId);

  return !order ? (
    <div>No data</div>
  ) : (
    <div>
      <h1>Order Detail</h1>
      <div>title: {order.businessId}</div>
      {journeyState}
    </div>
  );
}
