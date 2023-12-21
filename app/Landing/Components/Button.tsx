import React from "react";
const Button = (props: any) => {
  const { title, variant, width, type } = props;
 

  return (
    <button
      className={` h-[5vh] rounded-[10px] m-0 p-0 text-lg flex items-center justify-center cursor-pointer ${
        variant === 1
          ? "bg-gradient-to-b from-[#8B7CFD] via-[#8B7CFD] to-[#159AFB]"
          : "border-2 border-[#4D8CFC]"
      }  w-${width}`}
      type={type}
    >
      <h1
        className={`px-3 m-0 p-0 ${
          variant === 1 ? "text-white" : "text-[#4D8CFC]"
        } font-[500]`}
      >
        {title}
      </h1>
    </button>
  );
};

export default Button;
