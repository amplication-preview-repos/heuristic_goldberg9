import * as graphql from "@nestjs/graphql";
import { LlmConfigurationResolverBase } from "./base/llmConfiguration.resolver.base";
import { LlmConfiguration } from "./base/LlmConfiguration";
import { LlmConfigurationService } from "./llmConfiguration.service";

@graphql.Resolver(() => LlmConfiguration)
export class LlmConfigurationResolver extends LlmConfigurationResolverBase {
  constructor(protected readonly service: LlmConfigurationService) {
    super(service);
  }
}
