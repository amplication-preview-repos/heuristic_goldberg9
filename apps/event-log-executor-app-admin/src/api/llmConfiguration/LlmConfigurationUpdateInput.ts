import { InputJsonValue } from "../../types";

export type LlmConfigurationUpdateInput = {
  createdBy?: string | null;
  name?: string | null;
  settings?: InputJsonValue;
};
