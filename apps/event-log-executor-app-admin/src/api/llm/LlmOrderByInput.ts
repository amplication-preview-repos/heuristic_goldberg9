import { SortOrder } from "../../util/SortOrder";

export type LlmOrderByInput = {
  configField?: SortOrder;
  configuration?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  toolsId?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
};
