import { ToolWhereUniqueInput } from "../tool/ToolWhereUniqueInput";

export type LlmCreateInput = {
  configField?: string | null;
  configuration?: string | null;
  createdBy?: string | null;
  name?: string | null;
  tools?: ToolWhereUniqueInput | null;
  version?: string | null;
};
