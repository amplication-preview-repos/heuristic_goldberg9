import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LlmConfigurationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="name" source="name" />
        <div />
      </SimpleForm>
    </Create>
  );
};
