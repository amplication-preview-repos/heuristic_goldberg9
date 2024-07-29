import { JsonValue } from "type-fest";

export type LlmConfiguration = {
  createdAt: Date;
  createdBy: string | null;
  id: string;
  name: string | null;
  settings: JsonValue;
  updatedAt: Date;
};
