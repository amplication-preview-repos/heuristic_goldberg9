import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LlmConfigurationServiceBase } from "./base/llmConfiguration.service.base";

@Injectable()
export class LlmConfigurationService extends LlmConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
