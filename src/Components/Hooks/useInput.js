import { useState } from "react";

export default ({ type = "text" }) => {
  const [value, setValue] = useState("");
  const onChange = e => {
    setValue(e.target.value);
  };

  return { value, onChange, type, setValue };
};
