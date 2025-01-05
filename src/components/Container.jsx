const Container = ({ children, ...props }) => {
  return (
    <div
      className="flex items-center justify-center w-full lg:max-w-[1080px] bg-gray-950 mx-auto"
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
