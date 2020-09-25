import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { useOrderHeader } from "../hooks";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

describe("Hooks", () => {
  it("useOrderHeader", () => {
    const store = mockStore({
      order: { ordersById: { "123": { businessId: "s-123", container: {} } } },
    });
    const wrapper = ({ children }: any) => (
      <Provider store={store}>{children}</Provider>
    );

    const { result } = renderHook(() => useOrderHeader("123"), { wrapper });
    expect(result.current.businessId).toBe("s-123");
  });
});

export {};
