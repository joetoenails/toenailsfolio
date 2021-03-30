import * as React from "react";
import "@fontsource/shrikhand";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Me from "../images/TonelliMugshot.jpg";
import leftArrow from "../images/leftArrow.svg";
import rightArrow from "../images/rightArrow.svg";
import Bubble from "../images/Bubble.png";

const roles = [
  "developer",
  "event producer",
  "marriage officiant",
  "dungeon master",
  "project manager",
  "birdwatcher",
];

const mobilePages = roles.map((role) => {
  return (
    <div
      style={{
        width: "90%",
        height: 20,
        fontFamily: "shrikhand",
        fontWeight: 100,
        fontSize: "1.2em",
        marginTop: ".3em",
        textAlign: "center",
        color: "#525563",

        paddingTop: ".1em",
      }}
    >
      {role}
    </div>
  );
});

const MobileRoleCall = ({ setSelectedRole, setSpeechBubble }) => {
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

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ marginRight: "1em" }} onClick={prevTitle}>
        <img style={{ width: 40, cursor: "pointer" }} src={leftArrow} />
      </div>
      {mobilePages[index]}
      <div
        style={{ marginRight: "1em", cursor: "pointer" }}
        onClick={nextTitle}
      >
        <img style={{ width: 40, cursor: "pointer" }} src={rightArrow} />
      </div>
    </div>
  );
};

export default MobileRoleCall;
