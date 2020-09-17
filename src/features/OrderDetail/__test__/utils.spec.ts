import { mockOrder } from "../types";
import { convertOrderDTOToVO } from "../utils";

describe("Utils", () => {
  it("convertOrderDTOToVO", () => {
    const order = mockOrder;
    const orderVO = convertOrderDTOToVO(mockOrder);

    expect(orderVO.id).toEqual("123");
  });
});

export {};
