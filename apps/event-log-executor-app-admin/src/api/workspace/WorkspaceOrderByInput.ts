import { SortOrder } from "../../util/SortOrder";

export type WorkspaceOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  path?: SortOrder;
  updatedAt?: SortOrder;
};
