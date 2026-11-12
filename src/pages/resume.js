import * as React from "react";
import "@fontsource/shrikhand";
import "@fontsource/cabin";
import "@fontsource/fira-sans";
import { Link } from "gatsby";

const desktopStyle = {
  fontFamily: "cabin",
  textDecoration: "underline",
  fontWeight: 200,
  fontSize: "1.3em",
  color: "#525563",
  marginLeft: "1em",
  marginRight: "1em",
  cursor: "pointer",
};

const mobileLinkStyle = {
  fontFamily: "cabin",
  textDecoration: "underline",
  fontWeight: 200,
  fontSize: ".9em",
  color: "#525563",
  marginLeft: ".5em",
  marginRight: ".5em",
  cursor: "pointer",
};

const pageStyle = {
  width: "100%",
  maxWidth: "960px",
  margin: "32px auto 64px auto",
  padding: "0 24px",
  boxSizing: "border-box",
  fontFamily: "cabin",
  color: "#232129",
};

const linkRowStyle = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: "2em",
};

const sectionStyle = {
  marginBottom: "1.25em",
};

const nameStyle = {
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "2.1em",
  fontWeight: 600,
  margin: 0,
  lineHeight: 1.2,
};

const headingStyle = {
  fontFamily: "Arial, Helvetica, sans-serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
  margin: "1.2em 0 0.35em",
  textTransform: "uppercase",
  fontSize: "1.2em",
};

const resumeBody = [
  { type: "header", value: "PROFESSIONAL SUMMARY" },
  {
    type: "text",
    value:
      "An operations-minded event producer and project manager with a knack for bringing people, ideas, and moving parts together. Experienced in producing live and digital programs, managing vendors and budgets, coordinating staff, and turning ambitious ideas into well-executed experiences. Equally comfortable building a run-of-show, troubleshooting a technical issue, or making friends with that speaker who still hasn’t sent us their slides.",
  },
  { type: "header", value: "CORE COMPETENCIES" },
  {
    type: "text",
    value:
      "Event & Program Production · Live & Virtual Event Coordination · Post-Production & Digital Content Publishing · Vendor Relations · Budget Administration · Marketing & Promotional Communications · Staff Coordination · Program Metrics & Reporting",
  },
  { type: "header", value: "PROFESSIONAL EXPERIENCE" },
  {
    type: "title",
    value: "Friends Of Irving Square Park | Volunteer Operations Lead",
    meta: "April 2021 - Present",
  },
  {
    type: "bullets",
    values: [
      "Create community programming and park events from initial planning through execution, managing logistics, schedules, volunteer staffing, communications, and on-site operations.",
      "Serve as a liaison among NYC Parks staff, elected officials, community boards, local businesses, and neighborhood partners to advance shared priorities.",
      "Helped secure more than $5 million in community investment for park improvements by developing project proposals, coordinating stakeholders, and supporting funding and advocacy efforts.",
      "Lead volunteer recruitment, coordination, and engagement, ensuring teams have the information, resources, and support needed to deliver successfully.",
      "Prepare grant applications, project proposals, board presentations, budget reports, and email newsletters.",
    ],
  },
  {
    type: "title",
    value: "CVS Health | Senior Software Engineer",
    meta: "April 2021 - July 2026",
  },
  {
    type: "bullets",
    values: [
      "Planned and coordinated software projects, breaking down requirements, tracking progress, and working through obstacles to deliver working products for users.",
      "Served as an escalation point for patient-facing and executive-level technical issues, diagnosing problems, coordinating solutions, and communicating with stakeholders.",
      "Identified opportunities to improve internal workflows, developing documentation, repeatable processes, and clearer procedures to improve delivery.",
      "Facilitated knowledge-sharing and training sessions for engineering and product teams, helping colleagues navigate new changes to systems and processes.",
    ],
  },
  {
    type: "title",
    value: "Lagunitas Brewing | National Events Coordinator",
    meta: "August 2019 - January 2021",
  },
  {
    type: "bullets",
    values: [
      "Coordinated the planning and execution of 50+ retail activations, pop-ups, and promotional events across Northeast markets, managing logistics, schedules, staffing, and production details from concept through completion.",
      "Recruited, trained, and coordinated a 12-person field team, overseeing event assignments, preparation, and on-site execution across multiple markets.",
      "Managed relationships with retail partners, vendors, and internal marketing teams, serving as a primary point of contact and resolving logistical challenges before and during events.",
      "Helped administer a $250,000 annual events and marketing budget, monitoring expenses and coordinating resources across a high volume of activations.",
    ],
  },
  {
    type: "title",
    value: "Gizmodo Media Group | Creative Producer",
    meta: "August 2017 - August 2019",
  },
  {
    type: "bullets",
    values: [
      "Produced branded events and experiential campaigns for clients including Puma, Porsche, and 23andMe, managing production from initial concept and planning through event-day execution.",
      "Coordinated venues, vendors, talent, clients, and internal creative teams, overseeing schedules, contracts, budgets, technical requirements, and production logistics.",
      "Developed production plans, staffing schedules, budgets, technical documentation, and run-of-show materials to ensure smooth execution.",
      "Managed post-production of recorded event content, including video editing, rendering, and preparation for digital publication and promotional distribution.",
      "Produced and hosted virtual programming, coordinating Zoom sessions, technical requirements, presenters, and audience experience.",
    ],
  },
  {
    type: "title",
    value: "ToeJam Music Festival | Founder",
    meta: "August 2015 - August 2021",
  },
  {
    type: "bullets",
    values: [
      "Founded and produced an independent music and arts festival, overseeing annual planning, programming, budgeting, artist booking, promotion, and event operations.",
      "Identified and coordinated artists, vendors, charitable partners, and volunteers, managing relationships and logistics across all stages of production.",
      "Managed ticketing, email marketing, promotional campaigns, and audience communications to drive attendance and support festival operations.",
      "Oversaw event budgets, staffing, vendor coordination, and on-site logistics, balancing creative programming with operational and financial considerations; built charitable partnerships and fundraising initiatives into festival programming.",
    ],
  },
];

const Resume = () => {
  return (
    <div style={pageStyle}>
      <div style={linkRowStyle}>
        <Link to="/" style={desktopStyle}>
          Home
        </Link>
        <a target="_blank" style={desktopStyle} href="https://github.com/joetoenails">
          Github
        </a>
        <a
          target="_blank"
          style={desktopStyle}
          href="https://www.linkedin.com/in/joetoenails/"
        >
          LinkedIn
        </a>
      </div>

      <div style={sectionStyle}>
        <h1 style={nameStyle}>JOE TONELLI</h1>
        <p style={{ margin: "0.35em 0 0 0", fontSize: "1rem" }}>
          New York, NY | joe.d.tonelli@gmail.com | 845-242-0456 | <a href="https://www.linkedin.com/in/joetoenails" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>

      <hr style={{ border: "0", borderTop: "1px solid #d9d9d9", margin: "1.3em 0" }} />

      {resumeBody.map((item, index) => {
        if (item.type === "divider") return <div key={index} style={{ height: "1em" }} />;
        if (item.type === "header") {
          return (
            <h2 key={index} style={headingStyle}>
              {item.value}
            </h2>
          );
        }
        if (item.type === "title") {
          return (
            <div key={index} style={{ marginTop: "1.2em" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em", flexWrap: "wrap" }}>
                <h3 style={{ margin: 0, fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 600, letterSpacing: "0.01em", fontSize: "1rem" }}>{item.value}</h3>
                <span style={{ fontWeight: 500 }}>{item.meta}</span>
              </div>
            </div>
          );
        }
        if (item.type === "bullets") {
          return (
            <ul key={index} style={{ margin: "0.75em 0 0 1.2em", paddingLeft: "1.2em", lineHeight: 1.6 }}>
              {item.values.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} style={{ margin: "0.5em 0", lineHeight: 1.6 }}>
            {item.value}
          </p>
        );
      })}
    </div>
  );
};

export default Resume;
