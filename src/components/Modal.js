import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-10 bg-black opacity-75 "
      onClick={props.onConfirm}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white w-96 rounded-md shadow-lg">
      <div className="p-4">{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm}> {props.children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
