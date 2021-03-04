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
        When not working or DMing, I can often be found at the beach or in the
        woods looking for birds. It's nice to get away :)
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
            style={{
              width: 350,
              height: 350,
              objectFit: "cover",
              borderRadius: "5px",
            }}
            src="https://lh3.googleusercontent.com/QEpXgqbZpSy5RSnPk725d5jD7CKVvpONSu1WN2rPdYI7Zx07OIyGWnlKQTWexSoqJWYKgQwLKoe3JT1zy5vVFgNDyHZq3jpdtkv6IveSnC7CZ6bLHdWy8LUnt-_ThVI6lFRGNfN6PRqFpNRsSYJSm0alJ16XjQIqvRl4qGM9HnAsE3zP7xeea28tRVLgAmW6N1pDYrIupS0f3KsbECcUlPkESyMhZmkHENlxn0-KaqgF1n2Qik9AG1DdfL9uIr4frEctdGLfHLO_qVO8xtpsEGDqSzPdcHsQvEsnX7sQMJDKR1XKmnDU29TOZRD4da78iXRGBWPlEEecz74Krw504rCqWFA6EOjTbv6Z4BkDQKBvw432iGT-maGusPqIeQDCZYHOLVzSW4KlZhlWledRxAXX_ie1vpMtvFBHyBhZr7cabwMcymVwhgUf7viBfhWF1E6VU1-K6yBZJJ_dHFsSNBDbSJR7XjQMMb_AeI5BG0k9lYV5o4x3eqtccJ50PbRdmPGrpMQqxJIocnE1cGug2WLZfUeppagBKrx8QVlPq8U5OV_2YcEIuYBArwAexKLZAlkAHCBZGM5MQ6tuF72woCsPq2gL3yLrql0umNuGj-WAaT66D51L-0xZXPR23IdG6hQSNyJZRMtPKaMgwhaUaAaKUW4o2fiy0KUiobm9rSqaFaJZLjmRWnv6YHM99cU=w776-h1035-no?authuser=0"
          />
        </div>
      </div>
      <h2
        style={{ fontFamily: "cabin", textAlign: "center", marginTop: "1.5em" }}
      >
        Total Unique Birds Seen To Date: 150
      </h2>
    </div>
  );
};

export default Birdwatcher;
