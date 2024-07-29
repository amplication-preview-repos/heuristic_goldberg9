/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ToolUseWhereUniqueInput } from "./ToolUseWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ToolUseUpdateInput } from "./ToolUseUpdateInput";

@ArgsType()
class UpdateToolUseArgs {
  @ApiProperty({
    required: true,
    type: () => ToolUseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ToolUseWhereUniqueInput)
  @Field(() => ToolUseWhereUniqueInput, { nullable: false })
  where!: ToolUseWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ToolUseUpdateInput,
  })
  @ValidateNested()
  @Type(() => ToolUseUpdateInput)
  @Field(() => ToolUseUpdateInput, { nullable: false })
  data!: ToolUseUpdateInput;
}

export { UpdateToolUseArgs as UpdateToolUseArgs };