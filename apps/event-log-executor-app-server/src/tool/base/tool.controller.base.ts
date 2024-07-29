/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ToolService } from "../tool.service";
import { ToolCreateInput } from "./ToolCreateInput";
import { Tool } from "./Tool";
import { ToolFindManyArgs } from "./ToolFindManyArgs";
import { ToolWhereUniqueInput } from "./ToolWhereUniqueInput";
import { ToolUpdateInput } from "./ToolUpdateInput";
import { ToolUseFindManyArgs } from "../../toolUse/base/ToolUseFindManyArgs";
import { ToolUse } from "../../toolUse/base/ToolUse";
import { ToolUseWhereUniqueInput } from "../../toolUse/base/ToolUseWhereUniqueInput";

export class ToolControllerBase {
  constructor(protected readonly service: ToolService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tool })
  async createTool(@common.Body() data: ToolCreateInput): Promise<Tool> {
    return await this.service.createTool({
      data: {
        ...data,

        creator: {
          connect: data.creator,
        },
      },
      select: {
        createdAt: true,
        createdBy: true,

        creator: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Tool] })
  @ApiNestedQuery(ToolFindManyArgs)
  async tools(@common.Req() request: Request): Promise<Tool[]> {
    const args = plainToClass(ToolFindManyArgs, request.query);
    return this.service.tools({
      ...args,
      select: {
        createdAt: true,
        createdBy: true,

        creator: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tool })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async tool(
    @common.Param() params: ToolWhereUniqueInput
  ): Promise<Tool | null> {
    const result = await this.service.tool({
      where: params,
      select: {
        createdAt: true,
        createdBy: true,

        creator: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Tool })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTool(
    @common.Param() params: ToolWhereUniqueInput,
    @common.Body() data: ToolUpdateInput
  ): Promise<Tool | null> {
    try {
      return await this.service.updateTool({
        where: params,
        data: {
          ...data,

          creator: {
            connect: data.creator,
          },
        },
        select: {
          createdAt: true,
          createdBy: true,

          creator: {
            select: {
              id: true,
            },
          },

          description: true,
          id: true,
          name: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Tool })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTool(
    @common.Param() params: ToolWhereUniqueInput
  ): Promise<Tool | null> {
    try {
      return await this.service.deleteTool({
        where: params,
        select: {
          createdAt: true,
          createdBy: true,

          creator: {
            select: {
              id: true,
            },
          },

          description: true,
          id: true,
          name: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/toolUses")
  @ApiNestedQuery(ToolUseFindManyArgs)
  async findToolUses(
    @common.Req() request: Request,
    @common.Param() params: ToolWhereUniqueInput
  ): Promise<ToolUse[]> {
    const query = plainToClass(ToolUseFindManyArgs, request.query);
    const results = await this.service.findToolUses(params.id, {
      ...query,
      select: {
        createdAt: true,
        createdBy: true,
        id: true,
        parameters: true,

        tool: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/toolUses")
  async connectToolUses(
    @common.Param() params: ToolWhereUniqueInput,
    @common.Body() body: ToolUseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      toolUses: {
        connect: body,
      },
    };
    await this.service.updateTool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/toolUses")
  async updateToolUses(
    @common.Param() params: ToolWhereUniqueInput,
    @common.Body() body: ToolUseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      toolUses: {
        set: body,
      },
    };
    await this.service.updateTool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/toolUses")
  async disconnectToolUses(
    @common.Param() params: ToolWhereUniqueInput,
    @common.Body() body: ToolUseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      toolUses: {
        disconnect: body,
      },
    };
    await this.service.updateTool({
      where: params,
      data,
      select: { id: true },
    });
  }
}
