import React from "react";
const Button = (props: any) => {
  const { title, variant, type } = props;
 

  return (
    <button
      className={`h-[5vh] rounded-[8px] m-0 py-0 px-4 text-xs flex flex-wrap items-center justify-center cursor-pointer ${
        variant === 1
          ? "bg-gradient-to-b from-[#8B7CFD] via-[#8B7CFD] to-[#159AFB]"
          : "border-2 border-blue-500"
      } `}
      type={type}
    >
      <h1
        className={`px-2 m-0 py-0  ${
          variant === 1 ? "text-white 2xl:text-base lg:text-xs" : "text-blue-500 2xl:text-base lg:text-xs" 
        } font-[500]`}
      >
        {title}
      </h1>
    </button>
  );
};

export default Button;
