import { JsonValue } from "type-fest";
import { Tool } from "../tool/Tool";

export type ToolUse = {
  createdAt: Date;
  createdBy: string | null;
  id: string;
  parameters: JsonValue;
  tool?: Tool | null;
  updatedAt: Date;
};
