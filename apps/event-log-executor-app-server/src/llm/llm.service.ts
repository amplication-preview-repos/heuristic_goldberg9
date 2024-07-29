import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LlmServiceBase } from "./base/llm.service.base";

@Injectable()
export class LlmService extends LlmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
