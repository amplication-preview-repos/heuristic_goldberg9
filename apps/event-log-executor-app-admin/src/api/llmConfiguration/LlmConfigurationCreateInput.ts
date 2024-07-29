import { InputJsonValue } from "../../types";

export type LlmConfigurationCreateInput = {
  createdBy?: string | null;
  name?: string | null;
  settings?: InputJsonValue;
};
