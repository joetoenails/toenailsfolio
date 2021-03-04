import * as React from "react";
import "@fontsource/shrikhand";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import Me from "../images/TonelliMugshot.jpg";
import Bubble from "../images/Bubble.png";
import Navbar from "../components/navbar";
import HomePageContent from "../components/HomePageContent";

import { useTransition, useSpring, animated } from "react-spring";

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
    }, 5000);
  }, []);

  return (
    <animated.div style={props}>
      <button onClick={nextTitle} style={titleButton}>
        ⮞
      </button>
    </animated.div>
  );
};

const SpeechBubble = ({ speechBubble }) => {
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
        style={{ position: "absolute", width: 190, left: 300, top: 320 }}
      />
    </animated.div>
  );
};

const IndexPage = () => {
  const [selectedRole, setSelectedRole] = React.useState("developer");
  const [speechBubble, setSpeechBubble] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setSpeechBubble(true);
    }, 8000);
  }, []);

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
          <h1 style={{ ...headingStyles, marginBottom: ".5em" }}>
            Hi, I'm <span style={{ color: palette.two }}>Joe</span>!
            <br />
            Your friendly neighborhood:
          </h1>
          <RoleCall
            setSelectedRole={setSelectedRole}
            setSpeechBubble={setSpeechBubble}
          />
          <img
            src={Me}
            alt="It's me, JoeToenails"
            style={{
              width: 300,
              height: 300,
              objectFit: "cover",
              objectPosition: "40%",
              position: "absolute",
              marginTop: "1em",
              borderRadius: "5px",
            }}
          />
          <SpeechBubble speechBubble={speechBubble} />
        </div>

        <div style={{ marginLeft: "7%", width: "100%" }}>
          <HomePageContent selectedRole={selectedRole} />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
