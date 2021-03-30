import * as React from "react";
import "@fontsource/shrikhand";
import "@fontsource/cabin";
import "@fontsource/fira-sans";

const h1 = {
  fontFamily: "shrikhand",
  fontWeight: 100,
  marginBottom: 0,
  marginTop: 0,
};
const p = { fontFamily: "cabin", marginTop: 0, marginBottom: "1em" };

const techStack = [
  {
    name: "G Suite",
    icon: "https://www.fintechfutures.com/files/2016/03/google.png",
  },
  {
    name: "Microsoft Office",
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png",
  },
  {
    name: "Gantt",
    icon: "https://image.flaticon.com/icons/png/512/85/85013.png",
  },
  {
    name: "Trello",
    icon:
      "https://netstorage.ringcentral.com/dpw/apps/BsxqZkBRQaWJ414y5EQOUg/0f760275-f987-4233-ad1d-f8358b63cb4a.png",
  },
  {
    name: "Sprout Social",
    icon:
      "https://pbs.twimg.com/profile_images/625697856330952709/3dynAKiy_400x400.png",
  },
  {
    name: "Mailchimp",
    icon:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8AAAD8/Pzq6urx8fH09PT39/fX19f5+fm+vr7f39+0tLTExMTk5OTU1NTy8vKdnZ2Wlpanp6eEhIR3d3ehoaHNzc1SUlIcHBxycnJCQkKSkpK7u7tISEhsbGwzMzNZWVkjIyM3NzdgYGCtra1/f3+IiIgNDQ0oKChFRUU7OzsfHx8WFhZmZmblt/xyAAASAElEQVR4nN1dZ3vyvA4uCTMEygxtoYyW9XT8/793IIlXvGRFoe917k8dGVYsa1t+emoY/fFsvv34abUu19/1oN306x6N3vqrpeLr+NdjIkTv3DLi/4TG7mxnpu8+j6O/Hl19JAsreTnSvx5gTSR7N303bP56jHUw+vXSF0hi1NhYMWh7+JNj6HtSPxlMFvtDefnLajEZxI+gwIOpiZjVeZgmcTtJJx9AEpPZoqpmchxO44eRYkR60cb0Pu3JVwylf1m0RjJZOSd/0nkEKUa0NQGzO2o2zEj6CAYSs/m3k7wc00dQY8CxOpBXI0d1JBIqJCZnnQeM+MkeQVAF8T8oM3UO4qKZ9GeHifBfmMZZlT6HhO9fdRIzkIqR8PoQsjg6FdkwdWuwzou4dHn7PTpeW8GYP4a0Amnl3V3fDc/S1ct4Hk7eHV6FSgd1hCuIWo5xRKl4lP7vqKoZaI31CCj8bZYwhkx56Ql5Hw5Jg3RxKDL00PPfwDG0jRsO+PfEYyu/8Bx0KwGFrYaoEniWDelWkJ3ReyMgsBXCMxgk8ss+Q5y47tY25jDM/K+qA0ULBiknCgbNsWiKthyyjLmGqKbE6PmhsGqMuidVzQfZiGsy+m6Of1PU3SAbyiHxzwzg/gWgMfqe3qW3BMQVoldS+hqkUFpJu4AlmAEdXDCa4tK+5Kp+BtxGPYGt1r4ZAjuSMxdgxqT2gaLRjLZoS+5rgIw5NUBgMxo/ltYSPPuQIJx4AJoISMmuK9x5McaJCeANJtQi8AWczn0msbINeKcnsC2efgB/Pwpf14wlOYGdH/7wN7ArYUkEU4A8UBMJcfEGvafdFIe2mmDSr/BnwzkUIWzJw4ki6gsmcAkZ6Nd8k/QxwTdqAoU3ASbQ6MkPZe9it876+aUIi2dNTKBI7ULXYNuUaTlFIvZxXXJRgTHpiNOIwm/dAaWoie1Wo6cnlmScS2GkxHCtD8R5C5EbPPRhd5hiMUdOzMtSeQyCQGJ7RhKJQN4wGNr7/Nac26tSsNttJ+ls8XcJxJF4MEzJdqvpUk5VdPtpYr9xPHXn8Dlofd++MGVg5Vrxjzaij/LTZK2th726G0iylLaoSgRlYN6KQcZwTzmDDK1//NAfoSAgtACAWFIwI2IA/+JxLxsu1+fTYrtdnM/nyTHNSi7pubmVVFOIyC9MxWolGa2d7md1k+F5bzHUvveL2bjjVJEDSgLH/LFb0PUTbTjVeHE8XACM0B/HJJKGZ7r8sTBTRvfmVbGezevHM66UBD5x5+cC0vR60YGU9e4MP2tTdwepWyikDCgooxMoAuIDf9EpDKSlqcL0Aq1t3Z1n+jOmy8eQuhQi7gQyc/U1yNQ8DXfm2FMS+MSFAsgj1KRoGY0bhpibPoDDJyCIRQix43VnIidw+KL9vQa+gZ4NDELlQow1XUHfWTQljnWTbrkRmhCytnVb9CZkRkBHAQzaEmguHb4AF+t1ar2niD4Zc6C0R8WyAijYvrbYMrqCCxk7OgJF/B6SQXuvjmQTUTNoCTq3iQ9wD7hYS+6+N5EOLUC1LUy4QADOB8V9yfBMQqDgUYAR2FxuyQiaqlJuJAPYvvNYAmlUhohDAHjUEFZrFgQpp4g/DBCYQZahB+Gixu7qTyLX1ICv1fgi3M16N0Z6TiXvsrbGEPFfv67vGsZECsFF0res6+Rz9Q2wR6n8dgv+yXJAWIY1I/pczBz811b3AhGjElMTzFWPQl4R5I9Ok+wLsUObKu5j19qGwA0UQP1tg1UILaNXyv5VJ1bT5y/wJ2EatdZeTXEFFgmCOHQ28JiYf7dGkzz6a+ZD/kq8nyikv/8ZNY2Z3e/ivPh83+lxnI+pVR2woBY+ucYjnn6BrGdgAjDPREgpasfjzfH8+vv+9b7frp1b0tn40PpCWNHecoQaBvc3vtRnUz4CliUygK9Cf01c6K5WgTplr0wlAnS1EUKQei9F26P7WjUUXE4g7+ca1T+F2G0TdbMO7L3IwCkfh/dKrLlWO8rCjAycVcOWsV9SYcVM/WpCFsXF7cvjToVXF0L7l1RAUOXDfFeUQuTFZV5zZmShwAOKGBJTiChu4Nrea5Hi0oEXikY6zDJFLWg2Eq9TMbaQ4AFJGROz9jFKNQOPBGeQ7hFjKpC+LrgnxbIhmDJ9XtDrfSFuCtFe61KmiL0cQyEbiTdl76s5MwO9oTVSPhDjNEd9ow2cSX2aBjmF6FVYrvpf5TeMbcQk6cV3IXKfcviISrAvWihpptLCuhvkeAHeipxCtLvDX1jkiJiXH94wgscHfCFz5BTi7TXGl0UBYFf5LQTcJvWoZaQurNHfgWX6fopfy9/C7SO2DPee67BBbnwdDM8TFdGN8pfw3AWzuj1SGLMx4g6v/HKAOUyFNC5/2Qc/hg3FUxyE7djxL5wwDsZexccvS5CC1StPa7tjDOhUU50GFkxEFCrwDflALkDcl6H38+4RlDGwz1ooiLJI5LIIbLrMlI4nJ6rvo3gAhUy6FRRKntvHNCAbzMK7biFs2GcAhIOp2nHsCb+Vn7/g0kqV7gmqhhiFbkWKj+NbeIM1w768OmuQi1h+4fRqxWTXGSg+yWbHaQwhgxc5CcaXKqW1Dlu68AqK0IMpCLYAbFZi69C5k6FOrbau8WMt+2h3P8bjpMf0mFHa/XpT+4xCp4GMljMtg7lrWtOw0IQ5belzp1gBrEvN1Cosqfrk3A7erRbb1c5ylQUbUyjs6mZVpnOs1lWUrmsVpO/VxxWuzGqWlNzbHhZ6DioZ+4OT3s3HvWOCXWXm5039qhJV4GWtwyJV12bnvsxDSvFHw6oN6SwzZCQY4pARSWeSioNoctKi4d4q6dpT4yJN1U/vsgBY2kn/iET1CPU2StztZrNOTZSJdOQjuK6rOBd0rXPsSyxZ3iTHYTt0+JB5FbJlnY0kQ2RvfwSvAfhR3kPYOsf28rHQi/ZQfS5WrCwslRQ4QnpCfIslQluObl4kSibSptSK5LRdWcdczn/YKeTBNnFRh3bDi7HMpzA1Pran+eLzpbJYox53kHJjw2VSckZwhNaFQr8WD+5WKl2ui+H99n6STXEBN5M0/GpdzpYVep/dj3Li8zpdV/yBlyC4cpRCKF3uWjFSNfxU+Ti4/YQGZduzCqAy7FCIl7u97d79y9ai0/mXSBrL7WiMnz9ClD8H7XhhQa9CLEQbj7fLQnLOmJfc038g7yY0x8GTcDMuqB9JaehDe7KxGXF6i33zmK2MFB55Cwl9l94AtOSZ1RZ4ihAMRvvVEfEJ350WEvt+vun5H/C+ZrY1yVdmoW1W/nJGq8NnMagKPQq4mlmo3phGJQ7y4wnHa7vWfLg00AkwBxuw/0o196Iq0HZvXGGzZ50GD+rU9zrAohSQUHH7IIYja4lOaaSulKURvpGStvMKA2MmUFWSMEdlBSapj6s8keEhRkT+1gtuVsNEGS/qkrSs6mpKUh/RSo60+UoObrR9gy7nGTvJ56yGMaRBBgsb4uYkd3Cug9VKGWqHdDNUyHFEZp/6JEu+TRf47bhO5H8xRLul+Q0mkFqcin3IQBOPlQQJY74s6t7Ohuur/rBgy4b4gEfJEAPewS7na61wZOaF8mfBapHECWVTWkETQ0+rE+C5er5a8nAbVzRlYYqQWv1WEGi75anZAdgOWqbDRVu7u7Tcaw8V9lyQSiRV+P1qtTLIkGWqnX+PXHvIa6dYi8KID1mIJHW0DBvt8aDMB3Pe+UK7hxCU5HBBkZjDkA1ChO1JEkkTn0sV54q1cTCPiIf27oJGiUPm61IKFwQUStEdYBTLnttteIfiJ8iuNma+cArvc6jwVm6C76WXwSmk4tGR3Ivj9+6RlYsL4jFrFN5sItUYym0kye2Al9kQ9e3IFCOy0D7lZ4YUQTIFKiisuNqFepT/BiUQuyFLQWd5kJ95ZmxR6EVIfRnjb6uTkwfiFU8TevZIfV3fHaqZhk/xoUs2PafeKkEmS63znbOIInqUj2pHnfq9O9rVtoRvsjco3DhfETjTh9Zqu/s/1S63wMhpnVUY9abVEvp/FTtb/GfvfhazaWwxndzRUE0vYAoHW2QaZYb2witNs0oT7K584rNtsYByu1WNUMG6zpkTD/3ROLH6i+1kMP01VbnMDTkmOUwPq1qwGOo5heY73DA5b2nx4S/X/Xx9b7KbjXu9cZZlm9n6vP2yVPC8D41qVS6HcQcV2aram/890iiM9EGYoD+qjUjB2veyK4aHcxK5j29ZN/d/KaIUZtPoTBpeU72auZ2HhPsaTheGz7bFUM89/jvLseUDs0u1rxrYlGG1zgCiinsBzqsu7qtKUXTg2TKYb6GJE3gmebc4glM6TKI6d5Jxf88yiZyNS9sUtGlWs9hYjcJ2OhyuX83kfmzns8EoKNXBYirOhShCa5b2byWJzHIFKQtNRRV/XnGxGCW9bDA8zpaT5Ww2THt2HeIE4323L8xdS9t6HZ3f3tfM7YdV1lZNqeJb0weHmepyh4OEZoGUfMLKiqq1PIWD18C5YiAKpTIFQNQBVllbXfnfhBS299LPMAolTeWNXgEr+CvigtdrL9Lafv9RZhBmdPpiUlL4zEfiAUZh5S5ZGa4m4xpUJm/KGmfxN19wOJKcWncQXj8qIJjCO762k3SEoLNzqhSxsCSSd3nJdoprDy/Y8qrc1zZfdd0vzpPjZjNI08HmuD4vVs4PnFf3qvE7JkLCOnnZC+EjaACj6t8X1vo0mXhaol2XjonNjYZKtMXyRU2QLZWd5Ys8H4AE6m/MKbvH1aN0bXExXrZHlxAoXPVK4IAJGtBRO0pQ5GyyekMy3NV7Cy1aUhDF6Wz++sYZ4uP3NEndNs2yuLhqrzLWg22tVj/tufo9n4MSh9WHF5bQvvrnPijUwWojP7WrGdMDt25UTOrVUfqs48DEqGbiFqYhojmCqNDXQ1tczUJNCU0VXLfLm6Q7TsMbuGjuTymtQ0lMuGezNfgFvKga7I/QNebWVU7JIb8BLQLbM+5lXY2zxP4dsPkhpjrN3jBXLAA6hYUZk4mUTjObLFw7B/XNgBotHhhCmKLQeuGzQEZHuQXewRZb5hmpsDRljO+vJ8HoCQppfdnOLHGHUTbdK3bFP6uNJbZfBhF4Q4/ioBijelP3HL1sz3fvPm6342ScpZvZSd9StnAEYHjtOaLRyKj+sb7mLx/GIJ8b15INapZvwPhc70gcW4I7gdL4OfSoAKG+0W042ulk8X6AGtsV2HNr8cT77VYTfzhRuDm1O8Mhtzy7xhgvrUv9/XSEOcjCS6ndOM3i2/ng220Rp9Pfj5eCQy4v16/P+fSYwWvZpT1i9ci7QzuUBAbYw6Nup49w9qWgAcHBZcjeA1QnqBghLWWK8lVcnxrATgE0JE8H33VLArKXN/lp6BxycojmfETcaVW0p/hKkNO/JFOI7kKL8XcBUAJ+VEdcIj0O6hr2HMqaoasNxHWDJjgGR4MqFOiOZkM2AqGtgb4jVqxITNtPG5Bqnzqfps4gqUIKLGDnoN2LUAnZ0n4/bGMsSmlTiZSFN4x0A8mnhMKg6uVQlsnnQJ6i+kI0i8/VfAd9zhzbKJJmLWp7EehUoQD6oJL61cJ9LfhBeISnBGSH/frf23A6A+mJ5ALh+ytLHOocSzUwWFQkPd8NiPAtXtCueGbKNNAbSwzh+9UFUE5/amyZTuQzGYEWqDccglnreDA+qE6TWz/qkNj6Nlc0W95kc7xJtqo4gG2BXeIESxQlU+uS/6E8zdoIxJ58dYRnT/lvO5277KdG/GoVtRi1wGpioTIZntzy+qchRaiiRvdWCS/7xXKYJaMc43Q4W//6U9CkB6470DmQ0BgOdwMdSkQNn7pqQZ1O4cGon0QNRxPuhAP4bthYNBdEtyCulyUOxU+tM2WRwEX7cfgkj1mAkCJz4OF4OIcyRGinOAjvD1HzFoxpu4IaUeeoTwoQtq414vVBZowDbWwoFYJ3/LE8lBiRFMMZsGsqHhOOEfZQGhcO9J3Q6iCmFqtf/535Y+gQFafm2BP2tqFESlG5eXMd13+pAD1oz3BHJkp4bWCfIi1GS3Rs/L5/76+HD0Nn84owWd9CTjz6D2B03B7g1O2n2d/bLgh0s9nC1vCC4WM7HRC3Hnw4OqN0OJ2/rna84vjycv23Pa2Pgyym9fv+BzFQ9EeqD96HAAAAAElFTkSuQmCC",
  },
  {
    name: "Google Analytics",
    icon:
      "https://media.trytn.dev/library/sites/2/2020/08/google-analytics-logo.png",
  },
  {
    name: "Asana",
    icon: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg",
  },
  {
    name: "Jira",
    icon: "https://cdn.iconscout.com/icon/free/png-512/jira-282222.png",
  },
  {
    name: "Adobe Creative Suite",
    icon:
      "data:image/png;base64,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",
  },
  {
    name: "Wordpress",
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png",
  },
  {
    name: "Airtable",
    icon:
      "https://www.podfeet.com/blog/wp-content/uploads/2018/05/airtable-logo.png",
  },
];

const ProjectManager = () => {
  return (
    <div style={{ width: "90%" }}>
      <h1 style={h1}>My Process</h1>
      <p style={p}>
        I'm an active project manager who loves to support and motivate my team
        members. I operate from a place of trust with my colleages, don't
        micromanage, yet keep an eye on all the myriad details that often fall
        through the cracks. My goal is to help each person on my team succeed
        individually, so we can all succeed together.
      </p>
      <h1 style={{ ...h1, marginBottom: "1em" }}>My Tools</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {techStack.map((tech, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginRight: "2em",
                marginBottom: "2em",
                width: 150,
              }}
            >
              <div style={{ alignSelf: "center" }}>
                <img
                  alt={tech.name}
                  style={{
                    width: "60px",

                    objectFit: "cover",
                  }}
                  src={tech.icon}
                />
              </div>
              <small
                style={{
                  fontFamily: "fira sans",
                  textAlign: "center",
                  marginTop: ".3em",
                }}
              >
                {tech.name}
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectManager;
