import * as React from "react";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import "@fontsource/shrikhand";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const h1 = {
  fontFamily: "cabin",
  marginTop: "1em",
};

const p = {
  fontFamily: "fira sans",
  textAlign: "center",
  padding: "24px",
  paddingBottom: "1em",
  fontSize: "1em",
};

const techStack = [
  {
    name: "Javascript",
    icon:
      "https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png",
  },
  {
    name: "Node.js",
    icon: "https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png",
  },
  {
    name: "PostgreSQL",
    icon: "https://icon-library.com/images/postgres-icon/postgres-icon-7.jpg",
  },
  { name: "Firebase", icon: "https://i.imgur.com/4R5umfV.png" },
  {
    name: "React",
    icon: "https://cdn.auth0.com/blog/react-js/react.png",
  },
  { name: "Redux", icon: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
  {
    name: "HTML",
    icon: "https://image.flaticon.com/icons/png/512/732/732212.png",
  },
  {
    name: "CSS",
    icon: "https://cdn.iconscout.com/icon/free/png-256/css-118-569410.png",
  },
  {
    name: "Git",
    icon: "https://git-scm.com/images/logos/downloads/Git-Icon-Black.png",
  },
  {
    name: "Socket.io",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
  },
  {
    name: "Python",
    icon:
      "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
  },
  {
    name: "Passport",
    icon: "https://avatars.githubusercontent.com/u/1160530?s=280&v=4",
  },
  {
    name: "OAuth",
    icon: "http://farm2.static.flickr.com/1333/1416054260_b519838f38_o.png",
  },
  {
    name: "Heroku",
    icon: "https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png",
  },
  {
    name: "Webpack",
    icon:
      "data:image/png;base64,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",
  },
  {
    name: "WebRTC",
    icon:
      "https://pbs.twimg.com/profile_images/830015236631646208/xDgK1jYK_400x400.jpg",
  },
  {
    name: "Google Cloud",
    icon:
      "https://cdn.iconscout.com/icon/free/png-256/google-cloud-platform-2-569356.png",
  },
  {
    name: "Three.js",
    icon:
      "https://pbs.twimg.com/profile_images/1156268573137833984/5gdpZtDv.jpg",
  },
  {
    name: "Typescript",
    icon: "https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png",
  },
  {
    name: "Travis CI/CD",
    icon:
      "https://e7.pngegg.com/pngimages/582/449/png-clipart-travis-ci-continuous-integration-software-build-software-testing-github-continuous-logo-fictional-character.png",
  },
];

const Developer = () => {
  const matches = useMediaQuery("(min-width:1100px)");
  const matchesMed = useMediaQuery("(max-width:900px)");

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
          marginTop: 0,
          paddingTop: 0,
          paddingLeft: 0,
          textAlign: "left",
          width: matchesMed ? "100%" : "75%",
        }}
      >
        I'm a team-oriented and product-minded developer with a love for
        building collaborative and interactive apps. I use each project as a
        chance to learn new technology, improve my skills, and better my code
        clarity. I always endeavor to motivate my peers, lead with optimism, and
        build long-lasting relationships. We can go further together, so let's
        pair program!
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "space-evenly",
          marginBottom: "1em",
          flexWrap: "wrap",
          width: "100%",
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
                    objectFit: "cover",
                  }}
                  src={tech.icon}
                />
              </div>
              <small style={{ fontFamily: "fira sans", textAlign: "center" }}>
                {tech.name}
              </small>
            </div>
          );
        })}
      </div>

      <h1 style={{ fontFamily: "shrikhand", fontWeight: 100, marginTop: 0 }}>
        My Projects
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
              width: 500,
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
          <p style={{ ...p, textAlign: "left", marginTop: 0 }}>
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
          <a href="https://github.com/joetoenails/scavenger-hunt">
            <img
              alt="scavenger hunt"
              style={{
                width: 500,
                height: 300,
                objectFit: "cover",
                boxShadow: "2px 2px 7px 0px #ababab",
                borderRadius: "10px",
              }}
              src="https://camo.githubusercontent.com/48cf3bd0ae4900c1622f81f63938344a978d1bdc6f489b074ccf21a19e184ebc/68747470733a2f2f692e696d6775722e636f6d2f647867416551382e6a7067"
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
                href="https://github.com/joetoenails/scavenger-hunt"
              >
                The ML Webcam Scavenger Hunt
              </a>
            </h2>
            <p
              style={{ ...p, textAlign: "left", marginTop: 0, marginBottom: 0 }}
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
                width: 500,
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
            <p style={{ ...p, textAlign: "left", marginTop: 0 }}>
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
