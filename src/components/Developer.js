import * as React from "react";
import "@fontsource/shrikhand";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import JSIcon from "../images/javascript_icon.png";
import Springboot from "../images/springboot.png";
import Mongo from "../images/mongo.png";
import Kafka from "../images/apache-kafka.jpg";
import HtmlLogo from "../images/html-logo.png"
import FirebaseLogo from "../images/firebase-logo.png"
import AngularLogo from "../images/angular-logo.svg"
import H100Logo from "../images/h100.png"

const h1 = {
  fontFamily: "cabin",
  marginTop: "1em",
};

const p = {
  fontFamily: "fira sans",
  textAlign: "center",
  padding: "24px",
  paddingBottom: "1em",
  fontSize: ".9em",
};

const simpleIcon = (slug) =>
  "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/" + slug + ".svg";

const techStack = [
  {
    name: "Javascript",
    icon: JSIcon,
  },
  {
    name: "Typescript",
    icon: simpleIcon("typescript"),
  },
  {
    name: "Node.js",
    icon: simpleIcon("nodedotjs"),
  },
  {
    name: "PostgreSQL",
    icon: simpleIcon("postgresql"),
  },
  {
    name: "React",
    icon: simpleIcon("react"),
  },
  {
    name: "Angular",
    icon: AngularLogo,
  },
  { name: "Redux", icon: simpleIcon("redux") },
  {
    name: "HTML",
    icon: HtmlLogo,
  },
  {
    name: "CSS",
    icon: simpleIcon("css3"),
  },
  {
    name: "Git",
    icon: simpleIcon("git"),
  },
  {
    name: "Socket.io",
    icon: simpleIcon("socketdotio"),
  },
  {
    name: "Python",
    icon: simpleIcon("python"),
  },
  {
    name: "Apache Kafka",
    icon: Kafka,
  },
  {
    name: "OAuth",
    icon: simpleIcon("oauth"),
  },
  {
    name: "Heroku",
    icon: simpleIcon("heroku"),
  },
  {
    name: "Webpack",
    icon: simpleIcon("webpack"),
  },
  {
    name: "MongoDB",
    icon: Mongo,
  },
  {
    name: "Google Cloud",
    icon: simpleIcon("googlecloud"),
  },
  {
    name: "Java Springboot",
    icon: Springboot,
  },
  {
    name: "Firebase",
    icon: FirebaseLogo,
  },
];

const Developer = () => {
  const matches = useMediaQuery("(min-width:700px)");

  return (
    <div
      style={{
        borderRadius: "5px",
        width: "90%",
      }}
    >
      <h1
        style={{
          fontFamily: "shrikhand",
          fontWeight: 100,
          marginTop: 0,
          marginBottom: ".2em",
        }}
      >
        My Skills
      </h1>
      <p
        style={{
          ...p,
          fontSize: "1em",
          marginTop: 0,
          paddingTop: 0,
          paddingLeft: 0,
          textAlign: "left",
          width: matches ? "100%" : "300px",
        }}
      >
        I'm a team-oriented and product-minded developer with a love for
        building collaborative and interactive apps. I use each project as a
        chance to learn new technology, improve my skills, and better my code
        clarity. I endeavor to motivate my peers, lead with optimism, and build
        long-lasting relationships. We can go further together, so let's pair
        program!
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "space-evenly",
          marginBottom: "1em",
          flexWrap: "wrap",
          width: matches ? "100%" : "90%",
        }}
      >
        {techStack.map((tech, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginRight: "1.5em",
                marginBottom: "1em",
                width: 100,
              }}
            >
              <div style={{ alignSelf: "center" }}>
                <img
                  alt={tech.name}
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "contain",
                    display: "block",
                  }}
                  src={tech.icon}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <small style={{ fontFamily: "fira sans", textAlign: "center" }}>
                {tech.name}
              </small>
            </div>
          );
        })}
      </div>

      <h1
        style={{
          fontFamily: "shrikhand",
          fontWeight: 100,
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        Previous Work
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: matches ? "1.5rem" : "0.75rem",
          marginTop: "0.75em",
          marginBottom: "0.5em",
          width: "100%",
          maxWidth: "760px",
          flexWrap: matches ? "nowrap" : "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "clamp(300px, 36vw, 520px)",
            minWidth: "300px",
            flexShrink: 0,
            alignSelf: "center",
          }}
        >
          <img
            alt="H100"
            src={H100Logo}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              display: "block",
              margin: 0,
            }}
          />
        </div>
        <h2
          style={{
            ...h1,
            margin: 0,
            paddingLeft: 0,
            textAlign: "left",
            color: "#029676",
            fontSize: "clamp(1.3rem, 2.1vw, 2.1rem)",
            lineHeight: 1.1,
            alignSelf: "center",
          }}
        >
          CVS Health
        </h2>
      </div>
      <p
        style={{
          ...p,
          fontSize: "1em",
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: ".4em",
          paddingLeft: 0,
          textAlign: "left",
          width: matches ? "100%" : "300px",
        }}
      >
        Healthcare data is only useful when it all works together. I worked on
        making that happen, leading integrations that brought external medical
        records from platforms like Epic, Cerner, and Athena into the CVS app.
        Along the way, I built backend services supporting millions of app users,
        worked with FHIR and HL7 data standards, and developed automated testing
        workflows to keep releases reliable and backwards compatible. I also wore
        a few different hats, from helping shape product requirements and
        coordinate engineering work to leading knowledge-sharing sessions across
        teams.
      </p>
      <h1 style={{ fontFamily: "shrikhand", fontWeight: 100, marginTop: 0 }}>
        Personal Projects
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: matches ? "row" : "column",
          width: "100%",
        }}
      >
        <a href="https://two-plus.web.app/userhome">
          <img
            alt="two plus"
            style={{
              width: matches ? 500 : "300px",
              height: 300,
              objectFit: "cover",
              boxShadow: "2px 2px 7px 0px #ababab",
              borderRadius: "10px",
            }}
            src="https://github.com/MasterCodersInc/TwoPlus/raw/main/src/assets/user-homepage.png"
          />
        </a>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 style={{ ...h1, marginBottom: 0, paddingLeft: "24px" }}>
            <a
              target="_blank"
              style={{
                color: "#029676",
                textDecoration: "underline",
              }}
              href="https://two-plus.web.app/userhome"
            >
              Two Plus
            </a>
          </h2>
          <p
            style={{
              ...p,
              textAlign: "left",
              marginTop: 0,
              width: matches ? "100%" : "300px",
            }}
          >
            A live pair-programming tool and social platform for developers that
            includes discussion threads, live chat, follower/following systems,
            content upvoting and tagging, a dynamically loaded home page, and of
            course, collaborative code editing. Built with React, Google
            Firebase/Firestore, Ace Editor, and Material UI.
          </p>
        </div>
      </div>
      <hr
        style={{ marginRight: "10%", marginBottom: "1em", marginTop: "1em" }}
      />
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: matches ? "row" : "column",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2 style={{ ...h1, marginBottom: 0, paddingLeft: "24px" }}>
              <a
                target="_blank"
                style={{
                  color: "#029676",
                  textDecoration: "underline",
                }}
                href="https://github.com/joetoenails/scavenger-hunt"
              >
                The ML Webcam Scavenger Hunt
              </a>
            </h2>
            <p
              style={{
                ...p,
                textAlign: "left",
                marginTop: 0,
                marginBottom: 0,
                width: matches ? "100%" : "300px",
              }}
            >
              A machine-learning scavenger hunt that challenges you and a
              partner to be the first to find random items in your home. Machine
              learning allows your webcam to recognize common household items
              like coffee mugs, corkscrews, envelopes, flowerpots, and more.
              Meant to be a simple proof of concept for a type of mini-game that
              could be integrated into a video chat client like Zoom. Built with
              WebRTC, React, and Socket.io.
            </p>
          </div>
        </div>
      </div>
      <hr
        style={{ marginRight: "10%", marginBottom: "1em", marginTop: "1em" }}
      />
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: matches ? "row" : "column",
            width: "100%",
          }}
        >
          <a href="https://buyrealart.herokuapp.com/">
            <img
              alt="buy real art"
              style={{
                width: matches ? 500 : "300px",
                height: 300,
                objectFit: "cover",
                boxShadow: "2px 2px 7px 0px #ababab",
                borderRadius: "10px",
              }}
              src="https://i.imgur.com/oZCE0dv.jpg"
            />
          </a>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2 style={{ ...h1, marginBottom: 0, paddingLeft: "1em" }}>
              <a
                target="_blank"
                style={{
                  color: "#029676",
                  textDecoration: "underline",
                }}
                href="http://buyrealart.herokuapp.com/"
              >
                Buy Real Art
              </a>
            </h2>
            <p
              style={{
                ...p,
                textAlign: "left",
                marginTop: 0,
                width: matches ? "100%" : "300px",
              }}
            >
              Created as part of Fullstack Academy's "Grace Shopper Project",
              this demo includes all the features of a standard CRUD app. It
              features an Express-based, RESTful API system (with protected API
              routes), a relational database schema built on PostgreSQL, hashed
              and salted user data, Google Oauth integration, the ability to
              persist guest carts in local storage, page admin functionality and
              frontend functionality built with React and Redux.
            </p>
          </div>
        </div>
        <div style={{ height: "50px" }}></div>
      </div>
    </div>
  );
};

export default Developer;
