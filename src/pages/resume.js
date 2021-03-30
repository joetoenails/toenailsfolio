import * as React from "react";
import "@fontsource/shrikhand";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import { Link } from "gatsby";
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
  marginLeft: ".5em",
  marginRight: ".5em",
  cursor: "pointer",
  target: "_blank",
};

const btnPrimary = {
  padding: 10,
  backgroundColor: "#044F3F",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  fontFamily: "cabin",
};

const btnActive = {
  padding: 10,
  backgroundColor: "#044F3F",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  fontFamily: "cabin",
  boxShadow: "2px 2px 2px gray",
};

const Resume = () => {
  const [clicked, setClicked] = React.useState(false);
  const matches = useMediaQuery("(min-device-width:700px");
  const linkstyle = matches ? desktopStyle : mobileLinkStyle;
  return (
    <div style={{ width: "93%", marginTop: "28px" }}>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Link to="/" style={linkstyle}>
          Home
        </Link>
        <a
          target="_blank"
          style={linkstyle}
          href="https://github.com/joetoenails"
        >
          Github
        </a>
        <a
          target="_blank"
          style={linkstyle}
          href="https://www.linkedin.com/in/joetoenails/"
        >
          LinkedIn
        </a>
        <a style={linkstyle} href="mailto:joe.d.tonelli@gmail.com">
          Contact
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: matches ? "row" : "column",
        }}
      >
        <div
          style={{
            marginTop: matches ? 0 : "2em",
            width: matches ? "50%" : "90%",
            height: matches ? "90vh" : "50vh",
            marginLeft: matches ? 0 : "10%",
          }}
        >
          <iframe
            frameborder="0"
            scrolling="no"
            width="100%"
            height="100%"
            src="https://drive.google.com/file/d/1s1z9hgiikhNqgrPyqUEMqj0Xde4u5KF6/preview"
          ></iframe>
        </div>
        <div style={{ alignSelf: "flex-start", marginLeft: "5em" }}>
          <h1
            style={{
              fontFamily: "shrikhand",
              marginBottom: 0,
              marginTop: matches ? "2em" : ".3em",
            }}
          >
            Get in touch!
          </h1>
          <h3
            style={{
              fontFamily: "cabin",
              marginTop: 0,
              marginBottom: 0,
              fontWeight: 100,
            }}
          >
            joe.d.tonelli@gmail.com
          </h3>
          <h3 style={{ fontFamily: "cabin", marginTop: 0, fontWeight: 100 }}>
            845-242-0456
          </h3>
          <a
            style={clicked ? btnActive : btnPrimary}
            onClick={() => {
              setClicked(true);
              setTimeout(() => {
                setClicked(false);
              }, 100);
            }}
            href="/TonelliResumeSite.pdf"
            download="TonelliResume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
