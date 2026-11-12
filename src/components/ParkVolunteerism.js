import * as React from "react";
import "@fontsource/shrikhand";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import programmingImage from "../images/programming.jpg";
import artImage from "../images/art.jpg";
import ecologyImage from "../images/ecology.jpeg";

const h1 = {
  fontFamily: "shrikhand",
  fontWeight: 100,
  marginBottom: 0,
  marginTop: 0,
};

const p = {
  fontFamily: "cabin",
  marginTop: 0,
  marginBottom: "1em",
};

const ParkVolunteerism = () => {
  return (
    <div style={{ width: "95%" }}>
      <h1 style={h1}>Park Volunteerism</h1>
      <p style={{ ...p, width: "90%" }}>
        This is a volunteer role, and it’s one I care a lot about because I love
        Irving Square Park and want it to be better for the people who use it every day. I
        help organize community projects, work with parks staff and local groups,
        and keep things moving from idea to execution. I’ve also helped bring in
        more than $5 million for park improvements, while supporting outreach,
        public programming, grant work, and project tracking so the work stays tied
        to what the neighborhood actually needs.
      </p>
      <hr />
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
        <div>
          <h4 style={{ ...h1, marginBottom: ".35em" }}>Community Programming</h4>
          <p style={p}>
            I help plan events and community programs that make the park feel more
            alive and more welcoming. It’s a volunteer role, but it’s the kind of
            work that brings people together, builds community, and makes the
            space feel like something people are proud to take part in.
          </p>
          <img
            src={programmingImage}
            alt="Park community programming"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              objectPosition: "center 25%",
              borderRadius: "8px",
              marginTop: ".5em",
            }}
          />
        </div>
        <div>
          <h4 style={{ ...h1, marginBottom: ".35em" }}>Fundraising</h4>
          <p style={p}>
            I also work with the less glamorous but really important stuff: grant
            applications, budgets, project plans, and keeping track of what’s
            getting done. It’s all part of making sure the park keeps improving in
            a way that matches what the neighborhood actually wants and needs. Grant money in 2025
            allowed us to host a major community art showcase - bringing more than 20 organizations
            and 100 volunteers into the park for a day of painting, music, and community engagement.
          </p>
          <img
            src={artImage}
            alt="Park art and community engagement"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "8px",
              marginTop: ".5em",
            }}
          />
        </div>
        <div>
          <h4 style={{ ...h1, marginBottom: ".35em" }}>Ecology & Care</h4>
          <p style={p}>
            I care about the park as a living space, not just a place to walk
            through. That means helping with cleanup, environmental care, and
            improvement projects that make the area healthier, cleaner, and more
            enjoyable for everyone who uses it.
          </p>
          <img
            src={ecologyImage}
            alt="Park ecology and care"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "8px",
              marginTop: ".5em",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ParkVolunteerism;
