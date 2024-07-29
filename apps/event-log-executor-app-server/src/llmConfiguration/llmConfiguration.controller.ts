import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LlmConfigurationService } from "./llmConfiguration.service";
import { LlmConfigurationControllerBase } from "./base/llmConfiguration.controller.base";

@swagger.ApiTags("llmConfigurations")
@common.Controller("llmConfigurations")
export class LlmConfigurationController extends LlmConfigurationControllerBase {
  constructor(protected readonly service: LlmConfigurationService) {
    super(service);
  }
}
