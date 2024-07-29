import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ToolUseService } from "./toolUse.service";
import { ToolUseControllerBase } from "./base/toolUse.controller.base";

@swagger.ApiTags("toolUses")
@common.Controller("toolUses")
export class ToolUseController extends ToolUseControllerBase {
  constructor(protected readonly service: ToolUseService) {
    super(service);
  }
}
