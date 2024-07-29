import { ToolWhereUniqueInput } from "../tool/ToolWhereUniqueInput";

export type LlmUpdateInput = {
  configField?: string | null;
  configuration?: string | null;
  createdBy?: string | null;
  name?: string | null;
  tools?: ToolWhereUniqueInput | null;
  version?: string | null;
};
