/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ToolWhereUniqueInput } from "../../tool/base/ToolWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class ToolUseCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  createdBy?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  parameters?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => ToolWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ToolWhereUniqueInput)
  @IsOptional()
  @Field(() => ToolWhereUniqueInput, {
    nullable: true,
  })
  tool?: ToolWhereUniqueInput | null;
}

export { ToolUseCreateInput as ToolUseCreateInput };