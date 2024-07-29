import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
