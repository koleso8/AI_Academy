const Button = ({ text, to }) => {
  return (
    <button
      href={to}
      className="min-w-16 py-2.5 px-5  text-[var(--button-text)] rounded-[5px]  buttonHover"
    >
      {text}
    </button>
  );
};

export default Button;
