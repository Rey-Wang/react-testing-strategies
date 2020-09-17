import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { orderSelector, getOrderById } from "../slice";

const mockStore = configureMockStore([thunk]);

describe("Slice", () => {
  it("actions", () => {
    const store = mockStore({ order: {} });
    store.dispatch(getOrderById("123") as any).then(() => {
      console.log(store.getActions);
      expect(store.getActions()).toHaveLength(1);
      expect(store.getActions()[0].type).toEqual("order/setOrder");
    });
  });
  it("selectors", () => {
    const state: any = {
      order: {
        ordersById: {
          "123": {
            id: "123",
          },
        },
      },
    };
    expect(orderSelector(state, "123")).toEqual({ id: "123" });
  });
});

export {};