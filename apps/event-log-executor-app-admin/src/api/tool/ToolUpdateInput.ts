import { LlmWhereUniqueInput } from "../llm/LlmWhereUniqueInput";
import { ToolUseUpdateManyWithoutToolsInput } from "./ToolUseUpdateManyWithoutToolsInput";

export type ToolUpdateInput = {
  createdBy?: string | null;
  creator?: LlmWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  toolUses?: ToolUseUpdateManyWithoutToolsInput;
  typeField?: string | null;
};
