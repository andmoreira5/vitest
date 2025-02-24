import { useState } from "react";

const RadioGroup = ({ options, name, onChange }) => {
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div role="radiogroup">
      {options.map((option) => (
        <label key={option} data-testid={option + "-label-radio"}>
          <input
            type="radio"
            name={name}
            value={option}
            data-testid={option + "-radio"}
            checked={selected === option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
