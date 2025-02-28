import { useState } from "react";

export default function MyForm() {
  const elements = {
    name: "",
    email: "",
  };

  const [formData, setFormData] = useState(elements);
  const [error, setError] = useState(elements);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { ...elements };
    let itIsError = false;
    Object.keys(elements).forEach((el) => {
      if (!formData[el]) {
        newErrors[el] = el.charAt(0).toUpperCase + el.split(1) + " is required";
        itIsError = true;
      }
      setError(newErrors);
      if (!itIsError) {
        alert("Form submited successfully!");
      } else {
        alert("There is some empty element");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {error.name && <span>{error.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {error.email && <span>{error.email}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
