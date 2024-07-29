import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
