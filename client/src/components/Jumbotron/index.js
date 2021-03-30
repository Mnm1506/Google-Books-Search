import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron"
      style={{ height: 100, clear: "both", paddingTop: 50, textAlign: "center" }}
    >
      {children}
    </div>
  );
};

export default Jumbotron;