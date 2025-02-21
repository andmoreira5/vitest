const ComboboxGroup = ({ animals }) => {
  return (
    <div>
      {animals.map((el) => (
        <div key={el}>
          <input
            type="radio"
            name="animal"
            value={el}
            data-testid={el + "-input"}
          />
          <label data-testid={el + "-label"}>{el}</label>
        </div>
      ))}
    </div>
  );
};

export default ComboboxGroup;
