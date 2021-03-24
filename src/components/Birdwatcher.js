import * as React from "react";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import "@fontsource/shrikhand";

const h1 = {
  fontFamily: "shrikhand",
  fontWeight: 100,
  marginBottom: 0,
  marginTop: 0,
};
const p = { fontFamily: "cabin", marginTop: 0, marginBottom: "1em" };

const Birdwatcher = () => {
  return (
    <div style={{ width: "95%" }}>
      <h1 style={h1}>My Birds</h1>
      <p style={p}>
        When not staring at a screen, I can often be found at the beach or in
        the woods looking for birds. It's nice to get away :)
      </p>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h4 style={{ ...h1, textAlign: "center" }}>Current Favorite Bird</h4>
          <p style={{ ...p, textAlign: "center", marginBottom: ".2em" }}>
            American Oystercatcher - just look at that beak!
          </p>
          <img
            alt="oystercatcher"
            style={{
              width: 350,
              height: 350,
              objectFit: "cover",
              borderRadius: "5px",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/d/db/American_oystercatcher_-_Cape_May%2C_NJ.jpg"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4 style={{ ...h1, textAlign: "center" }}>Most Recent Sighting</h4>
          <p style={{ ...p, textAlign: "center", marginBottom: ".2em" }}>
            Forster's Tern - seems like he's seen some shit.
          </p>
          <img
            alt="tern"
            style={{
              width: 350,
              height: 350,
              objectFit: "cover",
              borderRadius: "5px",
            }}
            src="https://i.imgur.com/8ViByPW.jpg"
          />
        </div>
      </div>
      <h2
        style={{ fontFamily: "cabin", textAlign: "center", marginTop: "1.5em" }}
      >
        Total Unique Birds Seen To Date:{" "}
        <span style={{ color: "#029676" }}>140</span>
      </h2>
    </div>
  );
};

export default Birdwatcher;
