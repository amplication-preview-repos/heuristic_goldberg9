import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TOOL_TITLE_FIELD } from "./ToolTitle";
import { LLM_TITLE_FIELD } from "../llm/LlmTitle";

export const ToolShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdBy" source="createdBy" />
        <ReferenceField label="Creator" source="llm.id" reference="Llm">
          <TextField source={LLM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ToolUse"
          target="toolId"
          label="ToolUses"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="createdBy" source="createdBy" />
            <TextField label="ID" source="id" />
            <TextField label="parameters" source="parameters" />
            <ReferenceField label="tool" source="tool.id" reference="Tool">
              <TextField source={TOOL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
