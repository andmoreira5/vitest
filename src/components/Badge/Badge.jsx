const Badge = ({ text, color = "gray", size = "md", icon: Icon }) => {
  const sizes = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  };

  const colors = {
    gray: "bg-gray-200 text-gray-800",
    red: "bg-red-200 text-red-800",
    green: "bg-green-200 text-green-800",
    blue: "bg-blue-200 text-blue-800",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full ${sizes[size]} ${colors[color]}`}
      data-testid="badge"
    >
      {Icon && <Icon className="mr-1" data-testid="badge-icon" />}
      {text}
    </span>
  );
};

export default Badge;
