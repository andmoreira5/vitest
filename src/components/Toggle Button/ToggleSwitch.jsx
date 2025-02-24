import { useState } from "react";

const ToggleSwitch = ({ isOn, handleToggle, label }) => {
  const [isChecked, setIsChecked] = useState(isOn);

  const toggleHandler = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    handleToggle(newState); // Chama a função para passar o estado para o componente pai
  };

  return (
    <div>
      <label>
        {label}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleHandler}
          data-testid="toggle-switch"
        />
      </label>
    </div>
  );
};

export default ToggleSwitch;
