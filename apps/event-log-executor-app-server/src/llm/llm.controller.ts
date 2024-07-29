import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LlmService } from "./llm.service";
import { LlmControllerBase } from "./base/llm.controller.base";

@swagger.ApiTags("llms")
@common.Controller("llms")
export class LlmController extends LlmControllerBase {
  constructor(protected readonly service: LlmService) {
    super(service);
  }
}
