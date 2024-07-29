import { Llm } from "../llm/Llm";
import { ToolUse } from "../toolUse/ToolUse";

export type Tool = {
  createdAt: Date;
  createdBy: string | null;
  creator?: Llm | null;
  description: string | null;
  id: string;
  name: string | null;
  toolUses?: Array<ToolUse>;
  typeField: string | null;
  updatedAt: Date;
};
