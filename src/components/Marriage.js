import * as React from "react";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import "@fontsource/shrikhand";
import Certif from "../images/Certif.png";
import { StaticImage } from "gatsby-plugin-image";

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
        two of my best friends). But I'd say it was a success. Tear production
        at Tonelli-officiated marriages is anecdotally 27% higher than at other
        weddings. If you'd like to book me for your wedding, send a short email
        with a description of yourself and your partner, and I'll set up a free
        consultation. Services include custom vow composition, marriage
        certificate delivery, and at least 3 meetings with the couple to make
        build an entirely unique service.
      </p>
      <hr style={{ marginBottom: "1em" }} />

      <StaticImage
        alt="certif"
        style={{ width: 425, borderRadius: "5px" }}
        src={"../images/Certif.png"}
      />
      <img
        alt="marriage"
        style={{
          marginLeft: "1em",
          width: 425,
          height: 343,
          objectFit: "cover",
          borderRadius: "5px",
        }}
        src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/120829748_2006912536106041_3478973308899220305_n.jpg?tp=1&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=guZvTa-2BxAAX-mqcrN&oh=cf68ff2c198fe9d79bb11f96a26a7a98&oe=6068EC81"
      />
    </div>
  );
};

export default Marriage;
