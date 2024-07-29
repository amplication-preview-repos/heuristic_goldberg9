import { LlmConfiguration as TLlmConfiguration } from "../api/llmConfiguration/LlmConfiguration";

export const LLMCONFIGURATION_TITLE_FIELD = "name";

export const LlmConfigurationTitle = (record: TLlmConfiguration): string => {
  return record.name?.toString() || String(record.id);
};
