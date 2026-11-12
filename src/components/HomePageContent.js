import * as React from "react";
import { useTransition, animated } from "react-spring";
import Developer from "./Developer";
import DungeonMaster from "./DungeonMaster";
import EventProducer from "./EventProducer";
import Marriage from "./Marriage";
import ParkVolunteerism from "./ParkVolunteerism";
import ProjectManager from "./ProjectManager";

const HomePageContent = ({ selectedRole }) => {
  const transitions = useTransition([selectedRole], {
    keys: (item) => item,
    from: {
      opacity: 0,
      transform: "translate3d(100%,0,0)",
      position: "absolute",
    },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(50%,0,0)" },
  });

  if (selectedRole === "developer") {
    return transitions((style) => (
      <animated.div style={style}>
        <Developer />
      </animated.div>
    ));
  }
  if (selectedRole === "event producer") {
    return transitions((style) => (
      <animated.div style={style}>
        <EventProducer />
      </animated.div>
    ));
  }
  if (selectedRole === "marriage officiant") {
    return transitions((style) => (
      <animated.div style={style}>
        <Marriage />
      </animated.div>
    ));
  }
  if (selectedRole === "dungeon master") {
    return transitions((style) => (
      <animated.div style={style}>
        <DungeonMaster />
      </animated.div>
    ));
  }
  if (selectedRole === "project manager") {
    return transitions((style) => (
      <animated.div style={style}>
        <ProjectManager />
      </animated.div>
    ));
  }
  if (selectedRole === "park volunteer") {
    return transitions((style) => (
      <animated.div style={style}>
        <ParkVolunteerism />
      </animated.div>
    ));
  }

  return null;
};

export default HomePageContent;
