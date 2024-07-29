import * as graphql from "@nestjs/graphql";
import { LlmResolverBase } from "./base/llm.resolver.base";
import { Llm } from "./base/Llm";
import { LlmService } from "./llm.service";

@graphql.Resolver(() => Llm)
export class LlmResolver extends LlmResolverBase {
  constructor(protected readonly service: LlmService) {
    super(service);
  }
}
