const Button = ({ text, to }) => {
  return (
    <button
      href={to}
      className="min-w-16 py-2.5 px-5 bg-[var(--button-bg)] text-[var(--button-text)] rounded-[5px] hover:scale-105 transition-all "
    >
      {text}
    </button>
  );
};

export default Button;
