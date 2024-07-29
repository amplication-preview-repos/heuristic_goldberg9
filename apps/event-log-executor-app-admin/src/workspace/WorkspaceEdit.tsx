import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const WorkspaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="name" source="name" />
        <TextInput label="path" source="path" />
      </SimpleForm>
    </Edit>
  );
};
