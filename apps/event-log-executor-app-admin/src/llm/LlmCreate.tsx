import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ToolTitle } from "../tool/ToolTitle";

export const LlmCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="config" source="configField" />
        <TextInput label="configuration" source="configuration" />
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="tools.id" reference="Tool" label="Tools">
          <SelectInput optionText={ToolTitle} />
        </ReferenceInput>
        <TextInput label="version" source="version" />
      </SimpleForm>
    </Create>
  );
};
