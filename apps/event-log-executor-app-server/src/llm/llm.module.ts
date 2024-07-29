import { Module } from "@nestjs/common";
import { LlmModuleBase } from "./base/llm.module.base";
import { LlmService } from "./llm.service";
import { LlmController } from "./llm.controller";
import { LlmResolver } from "./llm.resolver";

@Module({
  imports: [LlmModuleBase],
  controllers: [LlmController],
  providers: [LlmService, LlmResolver],
  exports: [LlmService],
})
export class LlmModule {}
