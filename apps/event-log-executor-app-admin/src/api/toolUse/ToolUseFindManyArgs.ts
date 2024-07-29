import { ToolUseWhereInput } from "./ToolUseWhereInput";
import { ToolUseOrderByInput } from "./ToolUseOrderByInput";

export type ToolUseFindManyArgs = {
  where?: ToolUseWhereInput;
  orderBy?: Array<ToolUseOrderByInput>;
  skip?: number;
  take?: number;
};
