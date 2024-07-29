/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Llm as PrismaLlm, Tool as PrismaTool } from "@prisma/client";

export class LlmServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LlmCountArgs, "select">): Promise<number> {
    return this.prisma.llm.count(args);
  }

  async llms(args: Prisma.LlmFindManyArgs): Promise<PrismaLlm[]> {
    return this.prisma.llm.findMany(args);
  }
  async llm(args: Prisma.LlmFindUniqueArgs): Promise<PrismaLlm | null> {
    return this.prisma.llm.findUnique(args);
  }
  async createLlm(args: Prisma.LlmCreateArgs): Promise<PrismaLlm> {
    return this.prisma.llm.create(args);
  }
  async updateLlm(args: Prisma.LlmUpdateArgs): Promise<PrismaLlm> {
    return this.prisma.llm.update(args);
  }
  async deleteLlm(args: Prisma.LlmDeleteArgs): Promise<PrismaLlm> {
    return this.prisma.llm.delete(args);
  }

  async getTools(parentId: string): Promise<PrismaTool | null> {
    return this.prisma.llm
      .findUnique({
        where: { id: parentId },
      })
      .tools();
  }
}