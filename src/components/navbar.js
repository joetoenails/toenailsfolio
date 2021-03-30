import * as React from "react";
import { Link } from "gatsby";

import "@fontsource/shrikhand";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const desktopStyle = {
  fontFamily: "cabin",
  textDecoration: "underline",
  fontWeight: 200,
  fontSize: "1.3em",
  color: "#525563",
  marginLeft: "1em",
  marginRight: "1em",
  cursor: "pointer",
  target: "_blank",
};

const mobileLinkStyle = {
  fontFamily: "cabin",
  textDecoration: "underline",
  fontWeight: 200,
  fontSize: ".9em",
  color: "#525563",
  marginLeft: "1em",
  marginRight: "1.5em",
  cursor: "pointer",
  target: "_blank",
};

const Navbar = () => {
  const device = useMediaQuery("(max-device-width: 480px)");

  const linkstyle = !device ? desktopStyle : mobileLinkStyle;

  return (
    <div>
      <a style={linkstyle} href="mailto:joe.d.tonelli@gmail.com">
        Contact
      </a>

      <a
        target="_blank"
        style={linkstyle}
        href="https://www.linkedin.com/in/joetoenails/"
      >
        LinkedIn
      </a>
      <a
        target="_blank"
        style={linkstyle}
        href="https://github.com/joetoenails"
      >
        Github
      </a>
      <Link style={linkstyle} to="/resume">
        Resume
      </Link>
    </div>
  );
};

export default Navbar;
