/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  LlmConfiguration as PrismaLlmConfiguration,
} from "@prisma/client";

export class LlmConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LlmConfigurationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.llmConfiguration.count(args);
  }

  async llmConfigurations(
    args: Prisma.LlmConfigurationFindManyArgs
  ): Promise<PrismaLlmConfiguration[]> {
    return this.prisma.llmConfiguration.findMany(args);
  }
  async llmConfiguration(
    args: Prisma.LlmConfigurationFindUniqueArgs
  ): Promise<PrismaLlmConfiguration | null> {
    return this.prisma.llmConfiguration.findUnique(args);
  }
  async createLlmConfiguration(
    args: Prisma.LlmConfigurationCreateArgs
  ): Promise<PrismaLlmConfiguration> {
    return this.prisma.llmConfiguration.create(args);
  }
  async updateLlmConfiguration(
    args: Prisma.LlmConfigurationUpdateArgs
  ): Promise<PrismaLlmConfiguration> {
    return this.prisma.llmConfiguration.update(args);
  }
  async deleteLlmConfiguration(
    args: Prisma.LlmConfigurationDeleteArgs
  ): Promise<PrismaLlmConfiguration> {
    return this.prisma.llmConfiguration.delete(args);
  }
}
