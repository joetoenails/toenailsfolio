import * as React from "react";
import { useTransition, animated } from "react-spring";
import Birdwatcher from "./Birdwatcher";
import Developer from "./Developer";
import DungeonMaster from "./DungeonMaster";
import EventProducer from "./EventProducer";
import Marriage from "./Marriage";
import ProjectManager from "./ProjectManager";

const HomePageContent = ({ selectedRole }) => {
  const transitions = useTransition(selectedRole, (p) => p, {
    from: {
      opacity: 0,
      transform: "translate3d(100%,0,0)",
      position: "absolute",
    },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(50%,0,0)" },
  });

  if (selectedRole === "developer") {
    return transitions.map(({ item, props, key }) => {
      return (
        <animated.div key={key} style={props}>
          <Developer />
        </animated.div>
      );
    });
  }
  if (selectedRole === "event producer") {
    return transitions.map(({ item, props, key }) => {
      return (
        <animated.div key={key} style={props}>
          <EventProducer />
        </animated.div>
      );
    });
  }
  if (selectedRole === "marriage officiant") {
    return transitions.map(({ item, props, key }) => {
      return (
        <animated.div key={key} style={props}>
          <Marriage />
        </animated.div>
      );
    });
  }
  if (selectedRole === "dungeon master") {
    return <DungeonMaster />;
  }
  if (selectedRole === "project manager") {
    return <ProjectManager />;
  }
  if (selectedRole === "birdwatcher") {
    return <Birdwatcher />;
  }
};

export default HomePageContent;
