import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LlmTitle } from "../llm/LlmTitle";
import { ToolUseTitle } from "../toolUse/ToolUseTitle";

export const ToolCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="createdBy" source="createdBy" />
        <ReferenceInput source="creator.id" reference="Llm" label="Creator">
          <SelectInput optionText={LlmTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="toolUses"
          reference="ToolUse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ToolUseTitle} />
        </ReferenceArrayInput>
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
