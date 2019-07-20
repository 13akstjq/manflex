import React, { useState } from "react";

export default ({ defaultValue }) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = e => {
    console.log(e.target.value);
  };

  return { value, onChange };
};
