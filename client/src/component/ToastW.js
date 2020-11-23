import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastHeader from "react-bootstrap/ToastHeader";
import ToastBody from "react-bootstrap/ToastBody";
// import React from "react";


export const ToastW = (show, error) => {
    const [showToast, setShowToast] = useState(show);
    const [errorText, setErrorText] = useState(error);

  return (
    <div
      className="row"
      style={{
        position: "relative",
        minHeight: "7rem",
      }}
    >
      <div className="col-6">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </div>

      <div className="col-6">
        <button onClick={() => setShowToast(true)}>Show Toast</button>
      </div>
    </div>
  );
};
