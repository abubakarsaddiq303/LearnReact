import React from "react";
import Person from "./person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "tabish",
      age: 23,
      skill: "block chain ",
    },
    {
      id: 1,
      name: "Asad",
      age: 23,
      skill: "Reactjs ",
    },
    {
      id: 1,
      name: "saddiq",
      age: 23,
      skill: "fronend",
    },
  ];

  return (
    <div>
      {persons.map((person) => (
        <Person person={person} />
      ))}
    </div>
  );
}

export default NameList;
