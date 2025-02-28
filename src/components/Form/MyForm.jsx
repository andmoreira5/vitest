import { useState } from "react";
import { elementsForm } from "../../data/structure form.js";

export default function MyForm() {
  const [formData, setFormData] = useState(elementsForm);
  const [error, setError] = useState(elementsForm);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { ...elementsForm };
    let itIsError = false;
    Object.keys(elementsForm).forEach((el) => {
      if (!formData[el]) {
        newErrors[el] = el.charAt(0).toUpperCase + el.split(1) + " is required";
        itIsError = true;
      }
      setError(newErrors);
      if (!itIsError) {
        console.log("Form Submitted", formData);
      } else {
        console.log("There is some empty element");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
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
          id="email"
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
