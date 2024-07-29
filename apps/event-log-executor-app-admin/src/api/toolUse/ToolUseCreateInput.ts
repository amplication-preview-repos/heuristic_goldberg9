import { InputJsonValue } from "../../types";
import { ToolWhereUniqueInput } from "../tool/ToolWhereUniqueInput";

export type ToolUseCreateInput = {
  createdBy?: string | null;
  parameters?: InputJsonValue;
  tool?: ToolWhereUniqueInput | null;
};
