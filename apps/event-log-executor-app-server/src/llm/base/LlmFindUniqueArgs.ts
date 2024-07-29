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
import { LlmWhereUniqueInput } from "./LlmWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class LlmFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => LlmWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LlmWhereUniqueInput)
  @Field(() => LlmWhereUniqueInput, { nullable: false })
  where!: LlmWhereUniqueInput;
}

export { LlmFindUniqueArgs as LlmFindUniqueArgs };
