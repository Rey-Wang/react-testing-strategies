import { flatten } from "lodash";
import { requestSuccessAPI } from "../../lib/api";

export const getCarriers = async () => {
  try {
    await requestSuccessAPI([
      {
        id: 1,
        name: "Carrier A",
      },
      {
        id: 2,
        name: "Carrier B",
      },
    ]);
  } catch (error) {
    console.error(error);
  }
};

export const getDrivers = async () => {
  try {
    await requestSuccessAPI([
      {
        id: 1,
        name: "driver A",
      },
      {
        id: 2,
        name: "driver B",
      },
    ]);
  } catch (error) {
    console.error(error);
  }
};

export const getLineItems = async () => {
  const payouts = await requestSuccessAPI([
    {
      id: 1,
      itemChanges: [{ id: 11, amount: 122.22, name: "Demurage" }],
      status: true,
    },
    {
      id: 2,
      itemChanges: [{ id: 12, amount: 12.11, name: "Chassis Split" }],
      status: true,
    },
    { id: 3, itemChanges: null, status: false },
  ]);
  const lineItems = payouts
    .filter(({ status }) => status)
    .map(({ itemChanges }) => itemChanges || []);
  return flatten(lineItems);
};
