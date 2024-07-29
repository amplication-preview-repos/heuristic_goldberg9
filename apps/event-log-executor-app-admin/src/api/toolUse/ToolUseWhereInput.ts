import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ToolWhereUniqueInput } from "../tool/ToolWhereUniqueInput";

export type ToolUseWhereInput = {
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  parameters?: JsonFilter;
  tool?: ToolWhereUniqueInput;
};
