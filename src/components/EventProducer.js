import * as React from "react";

import "@fontsource/cabin";
import "@fontsource/fira-sans";
import "@fontsource/shrikhand";
import { GridList, GridListTile } from "@material-ui/core";

const toejam = [
  {
    img:
      "https://bigtoeproductions.files.wordpress.com/2019/06/20988821_10210456572790327_2441002102962301907_o-1.jpg",
    col: 1,
    row: 1,
  },
  {
    img:
      "https://bigtoeproductions.files.wordpress.com/2019/06/20988905_10210456536189412_5752576676158497518_o.jpg?strip=info&w=712",
    col: 1,
    row: 1,
  },
  {
    img:
      "https://bigtoeproductions.files.wordpress.com/2019/06/0008672_0008672-r1-018-7a.jpg?strip=info&w=1805",
    col: 1,
    row: 1,
  },
  {
    img:
      "https://bigtoeproductions.files.wordpress.com/2019/06/39744850_10213040015014768_1649729258022502400_o.jpg?strip=info&w=1287",
    col: 1,
    row: 1,
  },
  {
    img:
      "https://bigtoeproductions.files.wordpress.com/2019/06/unnamed.jpg?strip=info&w=2000",
    col: 1,
    row: 1,
  },
  {
    img:
      "https://bigtoeproductions.files.wordpress.com/2019/06/40139761_10213040024615008_8032652943142420480_o.jpg?strip=info&w=1225",
    col: 1,
    row: 1,
  },
];

const rsx = [
  "https://bigtoeproductions.files.wordpress.com/2019/06/0c5k8544.jpg?w=1280",
  "https://bigtoeproductions.files.wordpress.com/2019/06/0c5k8442.jpg?w=829&h=&zoom=2",
  "https://bigtoeproductions.files.wordpress.com/2019/06/0c5k8219.jpg?w=829&h=&zoom=2",
  "https://bigtoeproductions.files.wordpress.com/2019/06/0c5k8236.jpg?w=2500&h=",
  "https://bigtoeproductions.files.wordpress.com/2019/06/0c5k8032.jpg?w=829&h=&zoom=2",
  "https://bigtoeproductions.files.wordpress.com/2019/06/0c5k8495.jpg?w=2500&h=",
];

const lemans = [
  "https://bigtoeproductions.files.wordpress.com/2019/06/0c5k9249.jpg?strip=info&w=2000",
  "https://bigtoeproductions.files.wordpress.com/2019/06/0c5k8750.jpg?strip=info&w=2000",
  "https://bigtoeproductions.files.wordpress.com/2019/06/0c5k9330.jpg?strip=info&w=2000",
  "https://bigtoeproductions.files.wordpress.com/2019/06/0c5k8586.jpg?strip=info&w=2000",
  "https://bigtoeproductions.files.wordpress.com/2019/06/0c5k8967.jpg?strip=info&w=2000",
  "https://bigtoeproductions.files.wordpress.com/2019/06/0c5k9196.jpg?strip=info&w=2000",
];

const deadspin = [
  "https://bigtoeproductions.files.wordpress.com/2019/06/dsc08880-1.jpg?strip=info&w=2000",
  "https://bigtoeproductions.files.wordpress.com/2019/06/dsc08867.jpg?strip=info&w=2000",
  "https://bigtoeproductions.files.wordpress.com/2019/06/img_9988.jpg?strip=info&w=2000",
  "https://bigtoeproductions.files.wordpress.com/2019/06/dsc08968.jpg?strip=info&w=2000",
  "https://bigtoeproductions.files.wordpress.com/2019/06/dsc08839.jpg?strip=info&w=2000",
  "https://bigtoeproductions.files.wordpress.com/2019/06/dsc08741.jpg?strip=info&w=2000",
];

const eventH1 = { fontFamily: "shrikhand", fontWeight: 100 };
const eventH2 = { fontFamily: "shrikhand", fontWeight: 100, fontSize: "1.5em" };
const eventP = { fontFamily: "cabin", fontSize: ".9em", marginTop: "5px" };
const EventProducer = () => {
  return (
    <div>
      <div style={{ width: "90%" }}>
        <h1 style={{ ...eventH1, marginBottom: 0, marginTop: 0 }}>My Events</h1>
        <p style={{ fontFamily: "cabin", marginTop: 0 }}>
          I've been producing events personally and professionally for more than
          5 years. They have always been a labor of love for me, and I get that
          same thrill each time event day rolls around. My core belief is there
          is nothing that’s “not my job.” I’ve booked travel, laid out marketing
          materials, contracted vendors, and designed stages. And yet, I’ve also
          greeted guests, plugged in extension cords, and folded up chairs.
          Having my hands in every part of my events is essential.
        </p>
        <div>
          <hr />
          <h1 style={{ ...eventH2, marginBottom: 0 }}>ToeJam</h1>
          <p style={eventP}>
            ToeJam is a local, independent, and charity-focused music festival
            that takes place in the Hudson Valley. Now in its 5th year, ToeJam
            brings art, music, apples, camping, love (and sometimes kangaroos),
            all together for a day of unforgettable memories.
          </p>
          <GridList cellHeight={150} cols={3}>
            {toejam.map((toe, index) => (
              <GridListTile key={index} cols={toe.col}>
                <img alt={index} src={toe.img} />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <div>
          <hr style={{ marginTop: "1em" }} />
          <h1 style={{ ...eventH2, marginBottom: 0 }}>The RSX-CADE</h1>
          <p style={eventP}>
            The RS-XCADE invited guests to a fashion-forward yet retro-inspired
            indie arcade and sneaker release party in NYC. Custom art
            installations, one-of-a-kind arcade games, live visuals, ‘80s and
            ‘90s-inspired decor, and a streetstyle-themed photobooth, arrived
            just in time for the latest RS-X drop.
          </p>
          <GridList cellHeight={150} cols={3}>
            {rsx.map((pic, index) => (
              <GridListTile key={index} cols={1}>
                <img alt={index} src={pic} />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <div>
          <hr style={{ marginTop: "1em" }} />
          <h1 style={{ ...eventH2, marginBottom: 0 }}>
            The 24-Hour LeManstravaganza
          </h1>
          <p style={eventP}>
            This 24-hour party celebrating the 24 Hours of Le Mans had a full
            day (and night) of programming, including movie screenings, video
            game tournaments, RC car racing, a sip and paint, a car show,
            neighborhood tours, & more – The LeManstravaganza was not one to be
            missed.
          </p>
          <GridList cellHeight={150} cols={3}>
            {lemans.map((pic, index) => (
              <GridListTile key={index} cols={1}>
                <img alt={index} src={pic} />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <div>
          <hr style={{ marginTop: "1em" }} />
          <h1 style={{ ...eventH2, marginBottom: 0 }}>The Deadspin Awards</h1>
          <p style={eventP}>
            The Deadspin Awards brings the site’s honest and irreverent sports
            coverage to life with a blown-out award ceremony that celebrates the
            year’s most ridiculous on-and-off-the-field moments, stories, and
            people. This heavily-attended, star-studded awards show-style event
            has rightfully earned its nickname of “The Razzies of Sports.”
          </p>
          <GridList cellHeight={150} cols={3}>
            {deadspin.map((pic, index) => (
              <GridListTile key={index} cols={1}>
                <img alt={index} src={pic} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
};

export default EventProducer;
