import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type WorkspaceWhereInput = {
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  path?: StringNullableFilter;
};
