import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  updatedAt?: DateTimeFilter;
  username?: StringFilter;
};
