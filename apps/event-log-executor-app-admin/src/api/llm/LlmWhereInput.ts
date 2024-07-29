import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ToolWhereUniqueInput } from "../tool/ToolWhereUniqueInput";

export type LlmWhereInput = {
  configField?: StringNullableFilter;
  configuration?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  tools?: ToolWhereUniqueInput;
  version?: StringNullableFilter;
};
