import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type LlmConfigurationWhereInput = {
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  settings?: JsonFilter;
};
