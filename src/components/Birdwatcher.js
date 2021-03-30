import * as React from "react";
import "@fontsource/shrikhand";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const h1 = {
  fontFamily: "shrikhand",
  fontWeight: 100,
  marginBottom: 0,
  marginTop: 0,
};
const p = { fontFamily: "cabin", marginTop: 0, marginBottom: "1em" };

const Birdwatcher = () => {
  const matches = useMediaQuery("(min-width:700px)");

  return (
    <div style={{ width: "95%" }}>
      <h1 style={h1}>My Birds</h1>
      <p style={{ ...p, width: "90%" }}>
        When not staring at a screen, I can often be found at the beach or in
        the woods looking for birds. It's nice to get away :)
      </p>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: matches ? "row" : "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
          }}
        >
          <h4 style={{ ...h1, textAlign: "center" }}>Current Favorite Bird</h4>
          <p style={{ ...p, textAlign: "center", marginBottom: ".2em" }}>
            American Oystercatcher - just look at that beak!
          </p>
          <img
            alt="oystercatcher"
            style={{
              width: matches ? 350 : 300,
              height: 350,
              objectFit: "cover",
              borderRadius: "5px",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/d/db/American_oystercatcher_-_Cape_May%2C_NJ.jpg"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: matches ? 0 : "1em",
          }}
        >
          <h4 style={{ ...h1, textAlign: "center" }}>Most Recent Sighting</h4>
          <p style={{ ...p, textAlign: "center", marginBottom: ".2em" }}>
            Forster's Tern - seems like he's seen some shit.
          </p>
          <img
            alt="tern"
            style={{
              width: matches ? 350 : 300,
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
