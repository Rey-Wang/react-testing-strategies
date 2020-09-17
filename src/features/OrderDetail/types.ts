import { LoadDTO } from "../LoadDetail/types";

export type OrderDTO = {
  id: string;
  container: {
    containerNumber: string;
    bolNumber: string;
  };
  status: string;
  businessId: string;
  loads: LoadDTO[];
};

export const mockOrder: OrderDTO = {
  id: "123",
  container: {
    containerNumber: "NEXT1133455",
    bolNumber: "112323",
  },
  status: "Emptied",
  businessId: "S-STZ4668",
  loads: [
    {
      id: "223",
      businessId: "L-JNS8704",
      payout: 1200.0,
      status: "Assigned",
    },
    {
      id: "224",
      businessId: "L-JNS8705",
      payout: 1200.0,
      status: "Drafted",
    },
  ],
};
