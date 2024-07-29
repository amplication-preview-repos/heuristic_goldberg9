import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ToolUseList } from "./toolUse/ToolUseList";
import { ToolUseCreate } from "./toolUse/ToolUseCreate";
import { ToolUseEdit } from "./toolUse/ToolUseEdit";
import { ToolUseShow } from "./toolUse/ToolUseShow";
import { LlmList } from "./llm/LlmList";
import { LlmCreate } from "./llm/LlmCreate";
import { LlmEdit } from "./llm/LlmEdit";
import { LlmShow } from "./llm/LlmShow";
import { ToolList } from "./tool/ToolList";
import { ToolCreate } from "./tool/ToolCreate";
import { ToolEdit } from "./tool/ToolEdit";
import { ToolShow } from "./tool/ToolShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { WorkspaceList } from "./workspace/WorkspaceList";
import { WorkspaceCreate } from "./workspace/WorkspaceCreate";
import { WorkspaceEdit } from "./workspace/WorkspaceEdit";
import { WorkspaceShow } from "./workspace/WorkspaceShow";
import { LlmConfigurationList } from "./llmConfiguration/LlmConfigurationList";
import { LlmConfigurationCreate } from "./llmConfiguration/LlmConfigurationCreate";
import { LlmConfigurationEdit } from "./llmConfiguration/LlmConfigurationEdit";
import { LlmConfigurationShow } from "./llmConfiguration/LlmConfigurationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"EventLogExecutorApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ToolUse"
          list={ToolUseList}
          edit={ToolUseEdit}
          create={ToolUseCreate}
          show={ToolUseShow}
        />
        <Resource
          name="Llm"
          list={LlmList}
          edit={LlmEdit}
          create={LlmCreate}
          show={LlmShow}
        />
        <Resource
          name="Tool"
          list={ToolList}
          edit={ToolEdit}
          create={ToolCreate}
          show={ToolShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Workspace"
          list={WorkspaceList}
          edit={WorkspaceEdit}
          create={WorkspaceCreate}
          show={WorkspaceShow}
        />
        <Resource
          name="LlmConfiguration"
          list={LlmConfigurationList}
          edit={LlmConfigurationEdit}
          create={LlmConfigurationCreate}
          show={LlmConfigurationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
