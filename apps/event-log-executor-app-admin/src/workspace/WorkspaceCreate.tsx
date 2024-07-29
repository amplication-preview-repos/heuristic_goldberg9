import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const WorkspaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="name" source="name" />
        <TextInput label="path" source="path" />
      </SimpleForm>
    </Create>
  );
};
