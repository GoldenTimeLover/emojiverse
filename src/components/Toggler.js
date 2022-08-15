import React from "react";
import { useState } from "react";

const Toggler = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="flex mt-8">
      <button
        onClick={() => {
          setIsToggled(false);
          props.onToggle(props.left);
        }}
        className={`${
          !isToggled ? "bg-slate-600 text-white" : "bg-slate-200 text-slate-600"
        } p-2 rounded-l-md`}
      >
        {props.left}
      </button>
      <button
        onClick={() => {
          setIsToggled(true);
          props.onToggle(props.right);
        }}
        className={`${
          isToggled ? "bg-slate-600 text-white" : "bg-slate-200 text-slate-600"
        } p-2 rounded-r-md`}
      >
        {props.right}
      </button>
    </div>
  );
};

export default Toggler;
