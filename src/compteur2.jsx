import { useState } from "react";

const Compte = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>mon button</button>
    </>
  );
};

export default Compte;
