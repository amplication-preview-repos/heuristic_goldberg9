import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ToolUseServiceBase } from "./base/toolUse.service.base";

@Injectable()
export class ToolUseService extends ToolUseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
