import { pick } from "lodash";
import { OrderDTO } from "./types";

export const convertOrderDTOToVO = (order: OrderDTO) => {
  return pick(order, ["id", "container"]);
};
