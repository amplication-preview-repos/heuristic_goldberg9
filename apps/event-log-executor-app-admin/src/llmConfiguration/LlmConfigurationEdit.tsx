import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LlmConfigurationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="name" source="name" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
