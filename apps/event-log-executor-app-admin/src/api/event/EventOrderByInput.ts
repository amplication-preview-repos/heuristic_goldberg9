import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
