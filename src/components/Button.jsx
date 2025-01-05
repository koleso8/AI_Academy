const Button = ({ text, to, ...props }) => {
  return (
    <button
      href={to}
      className=" min-w-16 py-2.5 px-5 bg-[var(--button-bg)] text-[var(--button-text)] rounded-[5px]"
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
