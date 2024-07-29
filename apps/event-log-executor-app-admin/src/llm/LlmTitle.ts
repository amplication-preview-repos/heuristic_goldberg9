import { Llm as TLlm } from "../api/llm/Llm";

export const LLM_TITLE_FIELD = "name";

export const LlmTitle = (record: TLlm): string => {
  return record.name?.toString() || String(record.id);
};
