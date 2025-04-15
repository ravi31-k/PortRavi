import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cybersecurity Engineer",
    icon: web,  // Replace with appropriate icon for cybersecurity
  },
  {
    title: "Penetration Tester",
    icon: mobile,  // Replace with appropriate icon for penetration testing
  },
  {
    title: "Security Operations Center (SOC) Analyst",
    icon: backend,  // Replace with appropriate icon for SOC
  },
  {
    title: "Cybersecurity Consultant",
    icon: creator,  // Replace with appropriate icon for consultancy
  },
];


const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Assistant Professor",
    company_name: "GL Bajaj Institute of Technology & Management, Noida",
    icon: "your_icon_path/gla.png",
    iconBg: "#383E56",
    date: "Sept 2024 - Present",
    points: [
      "Delivered foundational Python training and Cybersecurity modules to 120+ students.",
      "Redesigned Algorithms curriculum, boosting student engagement by 30%.",
      "Mentored 15+ innovative projects, many of which were recognized in competitions.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "IIIT Allahabad",
    icon: "your_icon_path/iiita.png",
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Aug 2024",
    points: [
      "Assisted in teaching Information Security Law & Regulation and Network Security.",
      "Supported lab sessions and evaluated assignments for over 100 students.",
      "Helped organize and review papers for ICDT 2025 Conference.",
    ],
  },
  {
    title: "Intern - Data Analysis",
    company_name: "ISRO, Jodhpur",
    icon: "your_icon_path/isro.png",
    iconBg: "#383E56",
    date: "Jun 2017 - Jul 2017",
    points: [
      "Worked on sentiment analysis of crowdsource data for regional policy evaluation.",
      "Applied Natural Language Processing (NLP) techniques to analyze large datasets.",
      "Contributed to report preparation and presentation of findings.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ravindra’s guidance during our cybersecurity project helped us secure 1st place at our college hackathon. His mentorship was phenomenal!",
    name: "Neha Sharma",
    designation: "B.Tech Student",
    company: "GL Bajaj Institute",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "The Algorithms course redesign by Ravindra sir made complex concepts easier to grasp. My scores improved drastically.",
    name: "Amit Raj",
    designation: "Student",
    company: "GL Bajaj Institute",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    testimonial:
      "As a TA, Ravindra was super helpful and responsive. He made tough security concepts more understandable and practical.",
    name: "Dr. Abhishek Vaish",
    designation: "Professor",
    company: "IIIT Allahabad",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

const projects = [
  {
    name: "ShadowShield – Advanced Real-Time Firewall with Anomaly Detection",
    description:
      "Developed a real-time firewall integrating Deep Packet Inspection (DPI), anomaly detection, GeoIP tracking, and rule enforcement, enhancing threat detection by 40% and reducing response time by 30%.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "network-security",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
    ],
    image: git.png,  // Replace with actual image import
    source_code_link: "https://github.com/ravi31-k/ShadowShield", // Correct GitHub URL
  },
  {
    name: "CySecLearn – Cybersecurity Learning Platform",
    description:
      "Created a machine learning-integrated cybersecurity learning platform that offers hands-on practice with real-world security tools and vulnerabilities, with 100% engagement among users.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "cybersecurity",
        color: "pink-text-gradient",
      },
    ],
    image: git.png,  // Replace with actual image import
    source_code_link: "https://github.com/ravi31-k/CySecLearn", // Correct GitHub URL
  },
  {
    name: "PKI System – Mini Public Key Infrastructure System",
    description:
      "Built a fully functional Mini PKI system with Flask that includes certificate registration, signing, validation, revocation, an admin dashboard, key management, and an AI-powered cybersecurity chat.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "cybersecurity",
        color: "pink-text-gradient",
      },
    ],
    image: git.png,  // Replace with actual image import
    source_code_link: "https://github.com/ravi31-k/Mini-PKI", // Correct GitHub URL
  },
  {
    name: "Web Security Framework: Acunetix & Nikto",
    description:
      "Designed a web security framework using Acunetix and Nikto, identifying vulnerabilities in live web portals and providing solutions for secure web application development.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "security-tools",
        color: "green-text-gradient",
      },
      {
        name: "web-security",
        color: "pink-text-gradient",
      },
    ],
    image: git.png,  // Replace with actual image import
    source_code_link: "https://github.com/ravi31-k/Web-Security-Framework", // Correct GitHub URL
  },
  {
    name: "Original Content Creation Using Blockchain",
    description:
      "Developed a platform to create original content using blockchain technology, ensuring transparency and authenticity of content. Focused on utilizing blockchain for digital content validation and distribution.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "web3",
        color: "green-text-gradient",
      },
      {
        name: "content-creation",
        color: "pink-text-gradient",
      },
    ],
    image: git.png,  // Replace with actual image import
    source_code_link: "https://github.com/Goodwiller/original_content_creation", // Correct GitHub URL
  },
];


export { services, technologies, experiences, testimonials, projects };
