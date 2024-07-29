import { LlmWhereUniqueInput } from "../llm/LlmWhereUniqueInput";
import { ToolUseCreateNestedManyWithoutToolsInput } from "./ToolUseCreateNestedManyWithoutToolsInput";

export type ToolCreateInput = {
  createdBy?: string | null;
  creator: LlmWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  toolUses?: ToolUseCreateNestedManyWithoutToolsInput;
  typeField?: string | null;
};
