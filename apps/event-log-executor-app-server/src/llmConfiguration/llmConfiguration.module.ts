import { Module } from "@nestjs/common";
import { LlmConfigurationModuleBase } from "./base/llmConfiguration.module.base";
import { LlmConfigurationService } from "./llmConfiguration.service";
import { LlmConfigurationController } from "./llmConfiguration.controller";
import { LlmConfigurationResolver } from "./llmConfiguration.resolver";

@Module({
  imports: [LlmConfigurationModuleBase],
  controllers: [LlmConfigurationController],
  providers: [LlmConfigurationService, LlmConfigurationResolver],
  exports: [LlmConfigurationService],
})
export class LlmConfigurationModule {}
