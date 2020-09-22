import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { ADD_ORDERS, getOrderById, ORDER_LOADING } from "../../store/action";

const mockStore = configureMockStore([thunk]);

describe("action", () => {
  it("getOrderById", () => {
    const store = mockStore({ order: {} });
    store.dispatch(getOrderById("123") as any).then(() => {
      expect(store.getActions()).toHaveLength(1);
      expect(store.getActions()[0].type).toEqual(ORDER_LOADING);
      expect(store.getActions()[1].type).toEqual(ADD_ORDERS);
    });
  });
});

export {};
