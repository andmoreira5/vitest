import { useState } from "react";

function CheckboxGroup({ fruits }) {
  const [selectedFruits, setSelectedFruits] = useState([]);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFruits((prev) =>
      checked ? [...prev, value] : prev.filter((fruit) => fruit !== value)
    );
  };

  return (
    <div>
      {fruits.map((fruit) => (
        <div key={fruit}>
          <input
            type="checkbox"
            value={fruit}
            onChange={handleChange}
            checked={selectedFruits.includes(fruit)}
            data-testid={`checkbox-${fruit}`}
          />
          <label>{fruit}</label>
        </div>
      ))}
    </div>
  );
}

export default CheckboxGroup;
