import { Module } from "@nestjs/common";
import { ToolUseModuleBase } from "./base/toolUse.module.base";
import { ToolUseService } from "./toolUse.service";
import { ToolUseController } from "./toolUse.controller";
import { ToolUseResolver } from "./toolUse.resolver";

@Module({
  imports: [ToolUseModuleBase],
  controllers: [ToolUseController],
  providers: [ToolUseService, ToolUseResolver],
  exports: [ToolUseService],
})
export class ToolUseModule {}
