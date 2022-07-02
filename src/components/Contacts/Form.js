import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </form>
    </div>
  );
};

export default Form;
