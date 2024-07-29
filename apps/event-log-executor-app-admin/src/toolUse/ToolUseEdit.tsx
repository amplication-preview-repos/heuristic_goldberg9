import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ToolTitle } from "../tool/ToolTitle";

export const ToolUseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="createdBy" source="createdBy" />
        <div />
        <ReferenceInput source="tool.id" reference="Tool" label="tool">
          <SelectInput optionText={ToolTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
