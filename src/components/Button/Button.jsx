const Button = ({ children, ...props }) => {
  return (
    <button
      data-testid="button"
      style={{
        width: "100%",
        maxWidth: "380px",
        height: "40px",
        backgroundColor: "#b6e06b",
        color: "#222",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
