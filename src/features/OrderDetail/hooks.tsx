import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const useOrderHeader = (orderId: string) => {
  const order = useSelector(
    (state: RootState) => state.order.ordersById[orderId]
  );
  if (!order) {
    return {
      businessId: "",
      containerNumber: "",
      journeyState: null,
    };
  }
  return {
    businessId: order.businessId,
    containerNumber: order.container.containerNumber,
    journeyState: <p>status: {order.status}</p>,
  };
};
