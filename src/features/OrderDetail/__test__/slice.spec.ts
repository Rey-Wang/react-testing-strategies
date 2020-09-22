import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import orderReducer, { orderSelector, getOrderById } from "../slice";

const mockStore = configureMockStore([thunk]);

describe("Slice", () => {
  it("actions", () => {
    const store = mockStore({ order: {} });
    store.dispatch(getOrderById("123") as any).then(() => {
      expect(store.getActions()).toHaveLength(1);
      expect(store.getActions()[0].type).toEqual("order/setOrder");
    });
  });
  it("reducer", () => {
    expect(orderReducer(undefined, {})).toEqual({
      orders: [],
      ordersById: {},
      orderLoading: false,
      orderLoadingError: false,
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
