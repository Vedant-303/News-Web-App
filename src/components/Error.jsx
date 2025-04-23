import React from "react";

const Error = ({ message }) => {
  return (
    <div className="error"
      style={{
        textAlign: "center",
        padding: "40px",
        fontSize: "28px",
        color: "#b00020",
        backgroundColor: "	#ff3333",
        margin: "25vh 25%",
      }}
    >
      <p>{message || "Something went wrong!"}</p>
    </div>
  );
};

export default Error;
