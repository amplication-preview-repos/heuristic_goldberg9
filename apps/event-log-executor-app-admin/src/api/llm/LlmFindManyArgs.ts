import { LlmWhereInput } from "./LlmWhereInput";
import { LlmOrderByInput } from "./LlmOrderByInput";

export type LlmFindManyArgs = {
  where?: LlmWhereInput;
  orderBy?: Array<LlmOrderByInput>;
  skip?: number;
  take?: number;
};
