// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Rithik Kottaram",
    program: "SMRTTECH 4SC3 Smart Cities and Communities / W Booth School of Engineering Practice and Technology",
    university: "McMaster University, Canada",
    email: "kottarar@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#142D4E",
    heroText: "#FFFFFF",
    pageBg: "#F1F7F5",
    accent: "#0D9488"
  },

  dividers: {
    dividerBg: "#DCEBE6",
    dividerText: "#142D4E"
  },

  footer: {
    footerBg: "#102A43",
    footerText: "#F0FDF4",
    footerBorder: "#245B58",
	
	  homeLinkText: "RoadwayVR",
	
	  templateCredit:
	    "This academic showcase template was developed by RoadwayVR.",
	
	  templateCreditLinkText:
	    "Learn more at RoadwayVR.com",
	
	  templateCreditUrl:
	    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Comparative Analysis of Human-Driven (HDV) and Autonomous (AV/CAV) Vehicles: Evaluating Their Impact on Traffic Flow and Road Network Performance Using SUMO",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈20 seconds): raw video → Traffic Simulation → Blender → Unity → Results"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
  "Traffic congestion at Warden Avenue and Lawrence Avenue East in Scarborough, Toronto, motivates the need for improved traffic management.",
  "Autonomous vehicles using Cooperative Adaptive Cruise Control (CACC) can change vehicle-following behaviour through shorter gaps and coordinated driving.",
  "Traffic flow is influenced by vehicle behaviour, road geometry, traffic demand, and signal timing at intersections.",
  "Microscopic SUMO simulation allows HDV and CAV traffic scenarios to be compared under identical road networks, routes, and traffic demand."
],
    problemTitle: "Problem Statement",
    problemBullets: [
  "Traffic congestion and low vehicle speeds affect the Warden Avenue and Lawrence Avenue East intersection.",
  "The impact of autonomous vehicles on traffic flow and vehicle density is uncertain.",
  "Existing signal timings may not provide sufficient green time for high-demand approaches.",
  "Changes to vehicle behaviour and signal timing need to be evaluated before real-world implementation."
],

objectivesTitle: "Project Objectives",
objectivesBullets: [
  "Develop a realistic roadway network and establish a baseline HDV traffic simulation using SUMO.",
  "Compare HDV and CAV traffic performance using speed-density analysis under identical traffic conditions.",
  "Implement a five-second green-light extension for the E206 approach while maintaining a 60-second signal cycle.",
  "Evaluate the impact of autonomous vehicles and revised signal timing on traffic speed, density, and waiting time."
]
  },
  overview: {
   title: "Methodology",
steps: [
  {
    title: "Step 1: Road Network Development (SUMO)",
    text: "Develop the Warden Avenue and Lawrence Avenue East road network using GIS data, including lanes, junctions, and road connections.",
    image: "assets/img/image2.jpg"
  },
  {
    title: "Step 2: Traffic Demand and HDV Baseline (SUMO)",
    text: "Configure vehicle routes, traffic demand, and signal timings to establish a baseline simulation with 100% human-driven vehicles (HDVs).",
    image: "assets/img/image3.jpg"
  },
  {
    title: "Step 3: Autonomous Vehicle Comparison (SUMO)",
    text: "Replace HDVs with connected autonomous vehicles (CAVs) using Cooperative Adaptive Cruise Control (CACC) and compare traffic speed and density.",
    image: "assets/img/image4.jpg"
  },
	{
  title: "Step 4: Results Analysis & Communication",
  text: "Summarize and compare the three simulation scenarios using KPIs, charts, and figures. Interpret findings, highlight improvements, and discuss limitations and future recommendations.",
  image: "assets/img/image5.jpg"
},
  {
    title: "Module 4: Results Analysis & Communication",
    bullets: [
    { text: "Summarize and compare the three simulation scenarios: HDV baseline, 100% CAV, and HDV with revised signal timing." },
    { text: "Visualize key performance indicators (KPIs), including average speed, traffic density, and waiting time using charts and figures." },
    { text: "Interpret simulation findings, highlight traffic improvements, discuss limitations, and identify potential future improvements." }
  ],
    image: "assets/img/image5.jpg"
  }
]
  },

 
implementation: {
  title: "Methodology Steps (Demo Modules)",
  modules: [
    {
      title: "Module 1: Road Network Development (SUMO)",
      bullets: [
        { text: "Develop the Warden Avenue and Lawrence Avenue East roadway network using GIS reference data." },
        { text: "Configure road edges, lane geometry, junctions, and internal connections in SUMO/NETEDIT." },
        { text: "Verify network connectivity and identify E206, the three-lane incoming approach to junction J1." }
      ],
      image: "assets/img/image2.jpg"
    },
    {
      title: "Module 2: Traffic Demand & HDV Baseline (SUMO)",
      bullets: [
        { text: "Configure 12 traffic flows with a nominal combined demand of 2,550 vehicles per hour." },
        { text: "Define vehicle routes, traffic behaviour, and the original 60-second traffic signal cycle." },
        { text: "Run a 100% Human-Driven Vehicle (HDV) simulation to establish baseline speed and density." }
      ],
      image: "assets/img/image3.jpg"
    },
    {
      title: "Module 3: Autonomous Vehicle Simulation (SUMO)",
      bullets: [
        { text: "Replace the HDV fleet with 100% Connected Autonomous Vehicles (CAVs)." },
        { text: "Implement Cooperative Adaptive Cruise Control (CACC) with a 0.6-second desired following gap." },
        { text: "Compare HDV and CAV traffic behaviour using speed-density measurements under identical demand and road conditions." }
      ],
      image: "assets/img/image4.jpg"
    },
    {
      title: "Module 4: Signal Timing Intervention & Analysis",
      bullets: [
        { text: "Transfer five seconds of green time to the E206-serving phase at junction J1." },
        { text: "Maintain the 60-second signal cycle while changing phase durations from 27/3/27/3 to 22/3/32/3 seconds." },
        { text: "Evaluate changes in mean speed, traffic density, and waiting time against the original HDV baseline." }
      ],
      image: "assets/img/image5.jpg"
    }
  ]
},

results: {
  title: "Results & Potential Improvements",
  subtitle:
    "Comparison of three SUMO simulation scenarios at E206: a 100% HDV baseline, a 100% CAV fleet, and an HDV scenario with revised traffic signal timing. Results are based on 36 complete 100-second observations.",

  charts: {
    left: {
      title: "Scenario 1 — HDV vs CAV Speed-Density Comparison",
      src: "assets/img/image6.jpg",
      alt: "SUMO speed-density comparison between 100% HDV and 100% CAV traffic scenarios."
    },
    right: {
      title: "Scenario 2 — HDV Baseline vs Revised Signal Timing",
      src: "assets/img/image7.jpg",
      alt: "SUMO speed-density comparison between original HDV traffic and HDV traffic with revised J1 signal timing."
    }
  },

  discussionTitle: "Discussion",
  discussionBullets: [
    "The HDV baseline recorded an average speed of 9.114 km/h and a mean density of 73.73 vehicles/km on E206.",
    "The CAV scenario increased average speed to 10.095 km/h and reduced mean density to 65.63 vehicles/km compared with the HDV baseline.",
    "The revised signal timing produced the strongest improvement, increasing average speed to 12.622 km/h and reducing density to 50.93 vehicles/km.",
    "The signal intervention also reduced the total recorded waiting-time sum from 5,114.3 to 3,029.7 seconds across the 36 observations.",
    "Results suggest that autonomous vehicle behaviour and optimized signal timing can improve traffic conditions, although further testing is needed to evaluate impacts across the entire intersection."
  ]
},

team: {
  title: "Team & Acknowledgments",
  subtitle:
    "Group 8 project team responsible for roadway network development, SUMO traffic simulation, autonomous vehicle analysis, and signal timing evaluation.",

  members: [
    { name: "Rithik Kottaram", role: "Group 8 Project Member" },
    { name: "Alex Carpen", role: "Group 8 Project Member" },
    { name: "Marcus Cameron", role: "Group 8 Project Member" },
    { name: "Shehab Ahmed", role: "Group 8 Project Member" }
  ],

  acknowledgments: [
    "Institution: McMaster University, Hamilton, Ontario, Canada",
    "Study Location: Warden Avenue and Lawrence Avenue East, Scarborough, Toronto",
    "Simulation Software: Eclipse SUMO 1.26 and NETEDIT",
    "Geographic Reference: OpenStreetMap contributors",
    "Analysis: Traffic speed, density, and waiting-time comparisons"
  ],

  repoLabel: "Project Repository",
  repoUrl: "https://github.com/JarkyTheGoat/RithikKottaram"
}
};

