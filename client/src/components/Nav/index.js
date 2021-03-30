import React from "react";

function Nav({children}) {
  return (
    <div style={{ height: 70, margin: "2px" }}> {children}
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Book Search
      </a>
      <a className="navbar-brand" href="/search">
        Search
      </a>
      <a className="navbar-brand" href="/Saved">
        Saved Books
      </a>
    </nav>
     </div>
  );
}

export default Nav;
