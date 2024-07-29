import { InputJsonValue } from "../../types";
import { ToolWhereUniqueInput } from "../tool/ToolWhereUniqueInput";

export type ToolUseUpdateInput = {
  createdBy?: string | null;
  parameters?: InputJsonValue;
  tool?: ToolWhereUniqueInput | null;
};
