import { SortOrder } from "../../util/SortOrder";

export type ToolUseOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  parameters?: SortOrder;
  toolId?: SortOrder;
  updatedAt?: SortOrder;
};
