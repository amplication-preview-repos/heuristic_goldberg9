import { ToolUse as TToolUse } from "../api/toolUse/ToolUse";

export const TOOLUSE_TITLE_FIELD = "createdBy";

export const ToolUseTitle = (record: TToolUse): string => {
  return record.createdBy?.toString() || String(record.id);
};
