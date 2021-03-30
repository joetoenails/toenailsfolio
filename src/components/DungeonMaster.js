import * as React from "react";
import "@fontsource/shrikhand";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const h1 = {
  fontFamily: "shrikhand",
  fontWeight: 100,
  marginBottom: 0,
  marginTop: 0,
};
const p = { fontFamily: "cabin", marginTop: 0 };

const chars = [
  {
    name: "Mudgraw",
    description:
      "Level 6 Monk Tortle who's already saved the world once. Also has a penchant for sewing and arm wrestling",
    image: "https://i.imgur.com/GV5mnVQ.png",
  },
  {
    name: "Saint George",
    description:
      "Level 4 Dragonborn Sorcerer and the best damn chef this side of the Summertham River",
    image: "https://i.imgur.com/wlWteuA.png",
  },
  {
    name: "Tome Slam",
    description:
      "Level 7 Kenku Death Cleric best known for his surly attitude and tendency to resurrect people at the wrong time",
    image: "https://i.imgur.com/qWmw3mf.png",
  },
];

const DungeonMaster = () => {
  const matches = useMediaQuery("(min-width:1100px)");

  return (
    <div style={{ width: "90%", marginLeft: matches ? 0 : "1em" }}>
      <div style={{ width: "90%" }}>
        <h1 style={h1}>My Dungeons</h1>
        <p style={p}>
          I'm a frequent D&D DM and player. I also love weird RPGs about rocks
          or aliens or bears!
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: matches ? "row" : "column",
          marginTop: "1.5em",
          width: "90%",
        }}
      >
        <img
          alt="atlantis"
          style={{
            width: matches ? 900 : "90%",
            height: 125,
            objectFit: "cover",
            borderRadius: "5px",
          }}
          src={"https://i.imgur.com/Lr5PMV1.jpg"}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: matches ? "2em" : "0em",
          }}
        >
          <h2 style={h1}>Oceanica</h2>
          <p style={p}>
            An Atlantis/pirates-inspired campaign that takes place on a
            water-world called Oceanica. Pieces of life from an ancient
            civilization are slowly returning to the surface, but why?
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: matches ? "row" : "column",
          marginTop: ".5em",
          width: "90%",
        }}
      >
        <img
          alt="vampire island"
          style={{
            width: "90%",
            height: 125,
            objectFit: "cover",
            borderRadius: "5px",
          }}
          src={
            "https://babette-cole.com/wp-content/uploads/2016/07/the-vampires-holiday-cover.jpg"
          }
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: matches ? "2em" : 0,
          }}
        >
          <h2 style={h1}>Vampire Island</h2>
          <p style={p}>
            A casual, tropical adventure for 2-4 vampires (and/or witches). The
            only rule? Turn all the other resort-goers into vampires without
            being caught.
          </p>
        </div>
      </div>

      <h1 style={{ ...h1, marginBottom: 0, marginTop: ".5em" }}>
        My Characters
      </h1>
      <p style={{ ...p, marginTop: 0, width: "100%" }}>
        Who I'm currently playing in my other campaigns
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: matches ? "row" : "column",
          width: matches ? "90%" : "60%",
        }}
      >
        {chars.map((char) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: "3em",
                width: "300px",
              }}
            >
              <img
                alt={char.name}
                style={{ width: 100, marginBottom: ".3em" }}
                src={char.image}
              />
              <h4 style={{ ...h1, textAlign: "center", color: "#029676" }}>
                {char.name}
              </h4>
              <p style={{ ...p, textAlign: "center" }}>{char.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DungeonMaster;
