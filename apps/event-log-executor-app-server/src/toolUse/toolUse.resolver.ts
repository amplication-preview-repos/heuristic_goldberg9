import * as graphql from "@nestjs/graphql";
import { ToolUseResolverBase } from "./base/toolUse.resolver.base";
import { ToolUse } from "./base/ToolUse";
import { ToolUseService } from "./toolUse.service";

@graphql.Resolver(() => ToolUse)
export class ToolUseResolver extends ToolUseResolverBase {
  constructor(protected readonly service: ToolUseService) {
    super(service);
  }
}
