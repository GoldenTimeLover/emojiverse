import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-slate-500 text-white active:bg-slate-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type={props.type}
      onClick={props.onClick}

    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  type: "button",
}
export default Button;
