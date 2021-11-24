import React, { useState } from "react";

function HookCounterFour() {
  const [items, setitems] = useState([]);

  const addItem = () => {
    setitems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>add s Number</button>
      <ul>
        {items.map((item) => (
          <h3>
            <li key={item.id}>{item.value}</li>
          </h3>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterFour;
