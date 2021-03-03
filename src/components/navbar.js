import * as React from "react";
import { Link } from "gatsby";

import "@fontsource/cabin";
import "@fontsource/fira-sans";

const linkstyle = {
  fontFamily: "cabin",
  textDecoration: "underline",
  fontWeight: 600,
  fontSize: "1.3em",
  color: "black",
  marginLeft: "1em",
  marginRight: "1em",
};

const Navbar = () => {
  return (
    <div>
      <Link style={linkstyle} to="/resume">
        Resume
      </Link>
      <Link style={linkstyle} to="https://github.com/joetoenails">
        Github
      </Link>
      <Link style={linkstyle} to="https://www.linkedin.com/in/joetoenails/">
        LinkedIn
      </Link>
    </div>
  );
};

export default Navbar;
