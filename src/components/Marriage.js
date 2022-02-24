import * as React from "react";
import "@fontsource/shrikhand";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import Certif from "../images/Certif.png";
import { StaticImage } from "gatsby-plugin-image";
import MarriagePic from "../images/marriage.jpg";

const h1 = {
  fontFamily: "shrikhand",
  fontWeight: 100,
  marginBottom: 0,
  marginTop: 0,
};
const p = { fontFamily: "cabin", marginTop: 0, marginBottom: "1em" };

const Marriage = () => {
  return (
    <div style={{ width: "90%" }}>
      <h1 style={h1}>My Marriages</h1>
      <p style={p}>
        I'm a licensed Marriage Officiant in the state of New York through the
        Universal Life Church. I've only performed one marriage thus far (for
        two of my best friends), but I'd say it was a success. Tear production
        at Tonelli-officiated marriages is anecdotally 27% higher than at other
        non-Tonelli-officiated weddings. If you'd like to book me for your
        wedding, send a short email with a description of yourself and your
        partner, and I'll set up a free consultation. Services include custom
        vow composition, marriage certificate delivery, and at least 3 meetings
        with the couple to create an entirely unique service.
      </p>
      <hr style={{ marginBottom: "1em" }} />

      <StaticImage
        alt="certif"
        style={{
          width: "45%",
          borderRadius: "5px",
          height: 300,
        }}
        src={"../images/Certif.png"}
      />
      <img
        alt="marriage"
        style={{
          marginLeft: "1em",
          width: "45%",
          height: 300,
          objectFit: "cover",
          borderRadius: "5px",
        }}
        src={MarriagePic}
      />
    </div>
  );
};

export default Marriage;
