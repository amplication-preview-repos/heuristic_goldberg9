/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ToolUseWhereUniqueInput } from "../../toolUse/base/ToolUseWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ToolUseUpdateManyWithoutToolsInput {
  @Field(() => [ToolUseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ToolUseWhereUniqueInput],
  })
  connect?: Array<ToolUseWhereUniqueInput>;

  @Field(() => [ToolUseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ToolUseWhereUniqueInput],
  })
  disconnect?: Array<ToolUseWhereUniqueInput>;

  @Field(() => [ToolUseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ToolUseWhereUniqueInput],
  })
  set?: Array<ToolUseWhereUniqueInput>;
}

export { ToolUseUpdateManyWithoutToolsInput as ToolUseUpdateManyWithoutToolsInput };