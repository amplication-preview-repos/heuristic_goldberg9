import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  roles: InputJsonValue;
  username: string;
};
