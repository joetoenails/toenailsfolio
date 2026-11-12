import * as React from "react";
import "@fontsource/shrikhand";
import "@fontsource/cabin";
import "@fontsource/fira-sans";

const h1 = {
  fontFamily: "shrikhand",
  fontWeight: 100,
  marginBottom: 0,
  marginTop: 0,
};
const p = { fontFamily: "cabin", marginTop: 0, marginBottom: "1em" };

const simpleIcon = (slug) =>
  "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/" + slug + ".svg";

const techStack = [
  {
    name: "G Suite",
    icon: simpleIcon("google"),
  },
  {
    name: "Microsoft Office",
    icon: simpleIcon("microsoftoffice"),
  },
  {
    name: "Gantt",
    icon: simpleIcon("ganttproject"),
  },
  {
    name: "Trello",
    icon: simpleIcon("trello"),
  },
  {
    name: "Sprout Social",
    icon: simpleIcon("sproutsocial"),
  },
  {
    name: "Mailchimp",
    icon: simpleIcon("mailchimp"),
  },
  {
    name: "Google Analytics",
    icon: simpleIcon("googleanalytics"),
  },
  {
    name: "Asana",
    icon: simpleIcon("asana"),
  },
  {
    name: "Jira",
    icon: simpleIcon("jira"),
  },
  {
    name: "Adobe Creative Suite",
    icon: simpleIcon("adobe"),
  },
  {
    name: "Wordpress",
    icon: simpleIcon("wordpress"),
  },
  {
    name: "Airtable",
    icon: simpleIcon("airtable"),
  },
];

const ProjectManager = () => {
  return (
    <div style={{ width: "90%" }}>
      <h1 style={h1}>My Process</h1>
      <p style={p}>
        I'm an active project manager who loves to support and motivate my team
        members. I operate from a place of trust with my colleages, don't
        micromanage, yet keep an eye on all the myriad details that often fall
        through the cracks. My goal is to help each person on my team succeed
        individually, so we can all succeed together.
      </p>
      <h1 style={{ ...h1, marginBottom: "1em" }}>My Tools</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {techStack.map((tech, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginRight: "2em",
                marginBottom: "2em",
                width: 150,
              }}
            >
              <div style={{ alignSelf: "center" }}>
                <img
                  alt={tech.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "contain",
                    display: "block",
                  }}
                  src={tech.icon}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <small
                style={{
                  fontFamily: "fira sans",
                  textAlign: "center",
                  marginTop: ".3em",
                }}
              >
                {tech.name}
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectManager;
