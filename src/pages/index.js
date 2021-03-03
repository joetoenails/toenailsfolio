import * as React from "react";
import styled, { keyframes } from "styled-components";
import "@fontsource/shrikhand";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import Me from "../images/TonelliMugshot.jpg";
import Navbar from "../components/navbar";
import HomePageContent from "../components/HomePageContent";

import { useTransition, animated } from "react-spring";

const palette = {
  one: "#7BA39A",
  two: "#029676",
  three: "#525563",
  fourt: "#044F3F",
};

// styles
const pageStyles = {
  color: "#232129",
  paddingLeft: "96px",
  paddingRight: "96px",
  paddingTop: "20px",
  paddingBottom: "20px",
  marginBottom: "50px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 30,
  maxWidth: 500,
  fontFamily: "shrikhand",
  letterSpacing: "1.2px",
  fontSize: "2.5em",
};
const heading2 = {
  color: palette.two,
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 500,
  fontFamily: "shrikhand",
  letterSpacing: "1px",
};

const transMain = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
  width: 245,
  height: 20,
  marginRight: "0%",

  color: "black",
  fontFamily: "cabin",
  fontWeight: 600,
  fontSize: "1.5em",
};

const roles = [
  "developer",
  "event producer",
  "marriage officiant",
  "dungeon master",
  "project manager",
  "birdwatcher",
];

const photoRoles = [
  null,
  "https://bigtoeproductions.files.wordpress.com/2019/06/img_3308.jpeg?strip=info&w=1683",
  null,
  null,
  null,
  null,
];

const pages = roles.map((role) => {
  return ({ style }) => (
    <animated.div style={{ ...style, width: "fit-content", height: 20 }}>
      {role}
    </animated.div>
  );
});

const titleButton = {
  cursor: "pointer",
  borderRadius: "50%",
  backgroundColor: "white",
  width: 30,
  height: 30,
  lineHeight: "30px",
  color: "black",
  fontWeight: 500,
  fontSize: "2em",
  border: "none",
  outline: "none",
  "&:hover": {
    background: "blue",
  },
  padding: 0,
};

const RoleCall = ({ setSelectedRole }) => {
  const [index, set] = React.useState(0);

  const nextTitle = () => {
    let newIdx = (index + 1) % 6;
    set(newIdx);
    setSelectedRole(roles[newIdx]);
  };

  const prevTitle = () => {
    let newIdx = index;
    if (newIdx === 0) {
      set(5);
      setSelectedRole(roles[5]);
    } else {
      newIdx = (index - 1) % 6;
      set(newIdx);
      setSelectedRole(roles[newIdx]);
    }
  };

  const transitions = useTransition(index, (p) => p, {
    from: {
      opacity: 0,
      transform: "translate3d(100%,0,0)",
      position: "absolute",
    },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <button style={titleButton} onClick={prevTitle}>
        ⮜
      </button>
      <div id={index} style={transMain}>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item];
          return <Page key={key} style={props} />;
        })}
      </div>
      <button style={titleButton} onClick={nextTitle}>
        ⮞
      </button>
    </div>
  );
};

const IndexPage = () => {
  const [selectedRole, setSelectedRole] = React.useState("developer");

  return (
    <main style={pageStyles}>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignContent: "center",
          width: "100%",
          height: "50px",
        }}
      >
        <Navbar />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <title>Toenails' World</title>
          <h1 style={headingStyles}>
            Hi, I'm <span style={{ color: palette.two }}>Joe</span>!
            <br />
            Your friendly neighborhood:
          </h1>
          <RoleCall setSelectedRole={setSelectedRole} />
          <img
            src={Me}
            style={{
              width: 300,
              height: 300,
              objectFit: "cover",
              objectPosition: "40%",
              marginTop: "1em",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ marginLeft: "7%", width: "100%" }}>
          <HomePageContent selectedRole={selectedRole} />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
