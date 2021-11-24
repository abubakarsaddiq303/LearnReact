import React from "react";

import "./App.css";
import Welcome from "./Welcome";
import Test from "./Test";
import TestTwo from "./TestTwo";
import TestThree from "./TestThree";
import UserGreeting from "./UserGreeting";
import NameList from "./NameList";
import Form from "./Form";
import ComponentC from "./ComponentC";
import HookCounterFour from "./HookCounterFour";
import HookCounterOne from "./HookCounterOne";
import HookMouse from "./HookMouse";
import DataFetching from "./DataFetching";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export default function Parent() {
  return (
    <div className="App">
      <Welcome name="Asad" post="Reactjs Developer">
        <p>this is the children props</p>
      </Welcome>
      <Welcome name="Tabish" post="Block Chain Developer">
        <button>Action</button>
      </Welcome>
      <Welcome name="Abubakar" post="internee" />
      <Test />
      <TestTwo />
      <TestThree />
      <UserGreeting />
      <NameList />
      <Form />

      <UserContext.Provider value={"saddiq"}>
        <ChannelContext.Provider value={"Authornate"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

      <HookCounterFour />
      <HookCounterOne />
      <HookMouse />
      <DataFetching />
    </div>
  );
}
