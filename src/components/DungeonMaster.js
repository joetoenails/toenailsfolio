import * as React from "react";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import "@fontsource/shrikhand";
import Certif from "../images/Certif.png";

const h1 = {
  fontFamily: "shrikhand",
  fontWeight: 100,
  marginBottom: 0,
  marginTop: 0,
};
const p = { fontFamily: "cabin", marginTop: 0 };

const DungeonMaster = () => {
  return (
    <div style={{ width: "90%" }}>
      <h1 style={h1}>My Dungeons</h1>
      <p style={p}>
        Frequent D&D DM and player. I also love weird RPGs about rocks!{" "}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "2em",
        }}
      >
        <img style={{ width: 500 }} src={"https://i.imgur.com/Lr5PMV1.jpg"} />
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
      <hr style={{ marginTop: "2em" }} />
      <h1 style={h1}>My Characters</h1>
    </div>
  );
};

export default DungeonMaster;
