import * as React from "react";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import "@fontsource/shrikhand";
import { Link } from "gatsby";

const linkstyle = {
  fontFamily: "cabin",
  textDecoration: "underline",
  fontWeight: 600,
  fontSize: "1.3em",
  color: "black",
  marginLeft: "1em",
  marginRight: "1em",
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
          flexDirection: "row",
        }}
      >
        <div style={{ width: "50%", height: "90vh" }}>
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
              marginTop: "2em",
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
            joe.d.tonelli@email.com
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
