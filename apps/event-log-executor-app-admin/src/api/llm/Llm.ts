import { Tool } from "../tool/Tool";

export type Llm = {
  configField: string | null;
  configuration: string | null;
  createdAt: Date;
  createdBy: string | null;
  id: string;
  name: string | null;
  tools?: Tool | null;
  updatedAt: Date;
  version: string | null;
};
