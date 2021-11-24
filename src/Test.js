import React, { useState } from "react";

function Test({ name, post }) {
  const [count, setcount] = useState(0);

  console.log(count);
  return (
    <div>
      {name}
      <br />
      {post}
      <br />
      <br />

      <button onClick={() => setcount(count + 1)}>count {count} </button>
    </div>
  );
}

export default Test;
