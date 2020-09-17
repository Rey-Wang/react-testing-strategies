import { getLineItems } from "../service";

describe("Service", () => {
  it("getLineItems", async () => {
    const lineItems = await getLineItems();
    expect(lineItems.length).toEqual(2);
  });
});

export {};
