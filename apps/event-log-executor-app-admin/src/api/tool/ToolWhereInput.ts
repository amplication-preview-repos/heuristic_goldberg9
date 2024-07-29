import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LlmWhereUniqueInput } from "../llm/LlmWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ToolUseListRelationFilter } from "../toolUse/ToolUseListRelationFilter";

export type ToolWhereInput = {
  createdBy?: StringNullableFilter;
  creator?: LlmWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  toolUses?: ToolUseListRelationFilter;
  typeField?: StringNullableFilter;
};
