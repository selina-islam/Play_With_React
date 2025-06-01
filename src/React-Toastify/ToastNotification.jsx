import React from "react";
import { ToastContainer, toast } from "react-toastify";

// install cmd: npm i react-toastify

const ToastNotification = () => {
  return (
    <div>
      <button
        onClick={() => {
          toast("add");
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          toast("delete done");
        }}
      >
        delete
      </button>
      <ToastContainer />
    </div>
  );
};

export default ToastNotification;
