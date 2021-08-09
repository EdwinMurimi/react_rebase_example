import React, { useState } from "react";

function Hello() {
  const [name, setName] = useState("Faith Wairimu");

  return (
    <div>
      <h1>Hello { name }, this is a react rebase example</h1>
    </div>
  );
}

export default Hello;
