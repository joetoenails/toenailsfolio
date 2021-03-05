import * as React from "react";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import "@fontsource/shrikhand";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

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
  return (
    <div style={{ width: "90%" }}>
      <h1 style={h1}>My Dungeons</h1>
      <p style={p}>
        I'm a frequent D&D DM and player. I also love weird RPGs about rocks or
        aliens or bears!{" "}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "1.5em",
          width: "90%",
        }}
      >
        <img
          alt="atlantis"
          style={{
            width: 900,
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
            marginLeft: "2em",
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
          flexDirection: "row",
          marginTop: ".5em",
          width: "90%",
        }}
      >
        <img
          alt="vampire island"
          style={{
            width: 750,
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
            marginLeft: "2em",
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
      <p style={{ ...p, marginTop: 0 }}>
        Who I'm currently playing in my other campaigns
      </p>
      <div style={{ display: "flex", flexDirection: "row", width: "90%" }}>
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
