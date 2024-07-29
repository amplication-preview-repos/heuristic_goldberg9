import { LlmConfigurationWhereInput } from "./LlmConfigurationWhereInput";
import { LlmConfigurationOrderByInput } from "./LlmConfigurationOrderByInput";

export type LlmConfigurationFindManyArgs = {
  where?: LlmConfigurationWhereInput;
  orderBy?: Array<LlmConfigurationOrderByInput>;
  skip?: number;
  take?: number;
};
