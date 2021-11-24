import React, { useState } from "react";

function TestThree() {
  const [name, setName] = useState({ firstName: "", LastName: "" });

  return (
    <form>
      <br /> <br />
      <h2>Input Form</h2>
      <br />
      <br />
      <input
        type="text"
        placeholder={"firstName"}
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder={"LastName"}
        value={name.LasttName}
        onChange={(e) => setName({ ...name, LastName: e.target.value })}
      />
      <h2>your first Name is - {name.firstName}</h2>
      <h2>your Last Name is - {name.LastName}</h2>
      <h2>{JSON.stringify}</h2>
    </form>
  );
}

export default TestThree;
