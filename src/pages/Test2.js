import React, { useState, useEffect } from "react";

// **************** Compdrendre dans quel condition un composant est re-render **************************//

const Test2 = () => {
  const [value, setValue] = useState(0);
  let toto = 0;

  function addState() {
    setValue(value + 1);
  }

  function add() {
    toto = toto++;
    console.log("coucou");
  }

  useEffect(() => {
    console.log(value);
    console.log(toto);
  });

  return (
    <>
      <button onClick={addState}>Click</button>
      {/* <div>{value}</div> */}
    </>
  );
};

export default Test2;
