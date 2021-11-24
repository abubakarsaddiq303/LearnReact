import React from "react";
import Test from "./Test";

function Welcome({ name, post, children }) {
  return (
    <div>
      <h1>
        Hello
        {name}
        <br />
        {post}
      </h1>
      <Test name={name} post={post} />
      {children}
    </div>
  );
}
export default Welcome;
