import * as React from "react";
import "@fontsource/shrikhand";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Me from "../images/TonelliMugshot.jpg";
import leftArrow from "../images/leftArrow.svg";
import rightArrow from "../images/rightArrow.svg";
import Bubble from "../images/Bubble.png";
import Navbar from "../components/navbar";
import HomePageContent from "../components/HomePageContent";
import MobileRoleCall from "../components/MobileRoleCall";

import { useTransition, useSpring, animated } from "react-spring";
import { Helmet } from "react-helmet";

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
const mobileStyles = {
  color: "#232129",
  paddingLeft: "15px",
  paddingRight: "15px",
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
    <animated.div
      style={{
        ...style,
        height: 20,
        fontFamily: "shrikhand",
        fontWeight: 100,
        fontSize: "1.1em",
        color: palette.three,
        marginLeft: "1em",
        marginRight: "1em",
        paddingTop: ".1em",
      }}
    >
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
  padding: 0,
};

const RoleCall = ({ setSelectedRole, setSpeechBubble }) => {
  const [index, set] = React.useState(0);

  const nextTitle = () => {
    let newIdx = (index + 1) % 6;
    set(newIdx);
    setSelectedRole(roles[newIdx]);
    setSpeechBubble(false);
  };

  const prevTitle = () => {
    let newIdx = index;
    if (newIdx === 0) {
      set(5);
      setSelectedRole(roles[5]);
      setSpeechBubble(false);
    } else {
      newIdx = (index - 1) % 6;
      set(newIdx);
      setSelectedRole(roles[newIdx]);
      setSpeechBubble(false);
    }
  };

  const transitions = useTransition(index, (p) => p, {
    from: {
      opacity: 1,
      transform: "translate3d(100%,0,0)",
      position: "absolute",
    },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ marginRight: "1em" }} onClick={prevTitle}>
        <img style={{ width: 40, cursor: "pointer" }} src={leftArrow} />
      </div>

      <div id={index} style={transMain}>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item];
          return <Page key={key} style={props} />;
        })}
      </div>

      <FlashingButton nextTitle={nextTitle} />
    </div>
  );
};

const FlashingButton = ({ nextTitle }) => {
  let toggle = true;
  const [props, set, stop] = useSpring(() => ({
    opacity: 1,
    color: "black",
  }));

  React.useEffect(() => {
    const flash = setInterval(() => {
      toggle = !toggle;
      set({
        opacity: toggle ? 1 : 0,
        color: toggle ? "blue" : "black",
      });
    }, 500);

    setTimeout(() => {
      clearInterval(flash);
      set({ opacity: 1 });
    }, 5000);
  }, []);

  return (
    <animated.div style={props}>
      <div style={{ marginLeft: "1em" }} onClick={nextTitle}>
        <img style={{ width: 40, cursor: "pointer" }} src={rightArrow} />
      </div>
    </animated.div>
  );
};

const SpeechBubble = ({ speechBubble }) => {
  const matches = useMediaQuery("(min-width:700px)");
  const device = useMediaQuery("(max-device-width: 480px)");

  const [props, set, stop] = useSpring(() => ({
    opacity: 0,
  }));

  if (speechBubble) {
    set({ opacity: 1 });
  }
  if (!speechBubble) {
    set({ opacity: 0 });
  }
  return (
    <animated.div style={props}>
      <img
        alt="bubble"
        src={Bubble}
        style={{
          position: "absolute",
          width: device ? 120 : 190,
          left: device ? 240 : 340,
          top: device ? 280 : 325,
        }}
      />
    </animated.div>
  );
};

const IndexPage = () => {
  const [selectedRole, setSelectedRole] = React.useState("developer");
  const [speechBubble, setSpeechBubble] = React.useState(false);
  const matches = useMediaQuery("(min-width:700px)");
  const device = useMediaQuery("(max-device-width: 480px)");

  React.useEffect(() => {
    setTimeout(
      () => {
        setSpeechBubble(true);
      },
      device ? 2000 : 8000
    );
  }, []);

  return (
    <main style={matches ? pageStyles : mobileStyles}>
      <Helmet>
        <title>Meet JoeToenails</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Helmet>
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
      <div
        style={{
          display: "flex",
          flexDirection: matches ? "row" : "column",
        }}
      >
        <div>
          <h1
            style={{
              ...headingStyles,
              fontSize: matches ? "2.5em" : "1.5em",
              marginBottom: ".5em",
              marginLeft: matches ? ".5em" : "20%",
            }}
          >
            Hi, I'm <span style={{ color: palette.two }}>Joe</span>!
            <br />
            Your friendly neighborhood:
          </h1>
          {!device ? (
            <RoleCall
              setSelectedRole={setSelectedRole}
              setSpeechBubble={setSpeechBubble}
            />
          ) : (
            <MobileRoleCall
              setSelectedRole={setSelectedRole}
              setSpeechBubble={setSpeechBubble}
            />
          )}
          <img
            src={Me}
            alt="It's me, JoeToenails"
            style={{
              width: device ? 200 : 300,
              height: device ? 200 : 300,
              objectFit: "cover",
              objectPosition: "40%",
              position: "absolute",
              marginTop: "1.7em",
              marginLeft: device ? "20%" : "1.7em",
              marginRight: device ? "20%" : 0,
              borderRadius: "5px",
            }}
          />
          <SpeechBubble speechBubble={speechBubble} />
        </div>

        <div
          style={{
            marginLeft: "7%",
            width: "100%",
            marginTop: device ? "15em" : matches ? 0 : "21em",
          }}
        >
          <HomePageContent selectedRole={selectedRole} />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
