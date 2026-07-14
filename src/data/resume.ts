export const profile = {
  name: "Ananya Shailesh",
  tagline: "AI/ML Engineer & Full-Stack Developer",
  location: "Chennai, India",
  email: "ananyashailesh321@gmail.com",
  phone: "9074269285",
  linkedin: "https://linkedin.com/in/ananya-shailesh-1376a5293",
  github: "https://github.com/ananyashailesh",
  summary:
    "B.Tech Computer Science student (AI & Robotics) at VIT Chennai, building AI-powered systems ranging from enterprise chatbots and drone ground control software to assistive robotics.",
  roles: [
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Robotics Enthusiast",
    "CS Student @ VIT Chennai",
  ],
};

export const education = [
  {
    school: "Vellore Institute of Technology",
    location: "Chennai, India",
    degree: "B.Tech in Computer Science with AI and Robotics; CGPA: 9.65/10",
    period: "July 2023 - July 2027",
  },
  {
    school: "Mount Bethany Public School",
    location: "Kerala, India",
    degree: "Higher Secondary: Grade 12 – 97% | Grade 10 – 99%",
    period: "2019 - 2023",
  },
];

export const experience = [
  {
    company: "Dell Technologies",
    location: "Bangalore, India",
    role: "CSG Intern - Excalibur Team (OS Recovery & System Crashes)",
    period: "June 2026 - Present",
    bullets: [
      "AI Chatbot Development: Built an internal AI-powered chatbot (OSRDM) enabling natural-language SQL querying and data writes across a 100+ table enterprise SQL Server database.",
      "LLM Pipeline: Implemented schema-retrieval and NL-to-SQL generation with safety validation, an admin-approval write workflow, and streaming responses via Blazor Server and SignalR.",
      "Data Sync Engine: Designed a hash-diff sync service mirroring 90+ production tables into a local read replica with tiered background refresh.",
    ],
  },
  {
    company: "Dr. Nancy Li International LLC - PM Accelerator",
    location: "Remote",
    role: "Software Engineer Intern - AI/ML",
    period: "Jan 2026 - Present",
    bullets: [
      "GenAI Development: Collaborated with product managers, UI/UX designers, and data scientists to design and develop Generative AI applications using LLMs and prompt engineering.",
      "Full-Stack Integration: Integrated LLMs, ML models, and APIs such as the ChatGPT API into production applications across front-end and back-end.",
    ],
  },
];

export const projects = [
  {
    name: "PawGuard",
    period: "Jan 2025 - Present",
    type: "Mobile App",
    stack: ["Flutter", "Firebase", "Google Maps API"],
    description:
      "Mobile app connecting users with animal shelters, veterinarians, and rescue teams — with real-time location tracking, adoption profiles, and secure donation payments.",
  },
  {
    name: "PolarisGCS",
    period: "March 2026 - Present",
    type: "Multi-Drone Ground Control System",
    stack: ["FastAPI", "React", "TypeScript", "Postgres", "Redis"],
    description:
      "Multi-drone GCS with a FastAPI cloud backend, Postgres/TimescaleDB, Redis pub/sub, and a React + TypeScript operator/admin dashboard. WebSocket live telemetry, fleet-mode support for up to 150 drones, and a PySide6 local gateway bridging MAVLink to the cloud.",
  },
  {
    name: "Guardian Bot",
    period: "November 2025 - February 2026",
    type: "ROS-Based Assistive Robot",
    stack: ["ROS", "Gazebo", "OpenCV", "IoT"],
    description:
      "Co-developed a ROS assistive robot integrating autonomous person-following, wearable IoT health monitoring, and automated emergency response for elderly care. Achieved 95.2% tracking accuracy and 92.1% fall-detection true-positive rate in Gazebo simulation, with sub-5-second emergency response.",
  },
];

export const research = [
  {
    title:
      "AI-Driven Real-Time Anomaly Detection in CT-Guided Procedures",
    description:
      "Co-authored research on novel sidecar architecture for surgical precision. Presented at CINS 2025 (IEEE), Dubai, UAE (Nov 2025).",
  },
];

export const skills = {
  Languages: ["Java", "JavaScript", "C", "C#", "Python", "C++", "MATLAB", "Dart", "R"],
  Frameworks: [
    ".NET",
    "TensorFlow",
    "PyTorch",
    "scikit-learn",
    "OpenCV",
    "NumPy",
    "Pandas",
    "Flutter",
    "React.js",
    "Node.js",
  ],
  Tools: ["Git", "Docker", "MySQL", "Firebase", "MongoDB", "Bootstrap"],
  Platforms: ["Linux", "Windows"],
};

export const honors = [
  "Rank 2 - Third Year, AI and Robotics Branch, VIT Chennai",
  "Rank 1 - Second Year, AI and Robotics Branch, VIT Chennai",
  "Rank 3 - First Year, AI and Robotics Branch, VIT Chennai",
  "3rd Winner - Hack4Health Pitchathon, VIT Chennai",
];

export const leadership = [
  {
    org: "AI and Robotics Branch, VIT Chennai",
    location: "Chennai, India",
    role: "Public Relations Representative",
    period: "Jan 2023 - Present",
    description:
      "Managed external communications and brand representation for the AI and Robotics department, and coordinated outreach and promotional activities showcasing department achievements to prospective students.",
  },
];
