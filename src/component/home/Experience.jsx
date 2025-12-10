import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiShopify, SiTailwindcss, SiFigma, SiJavascript, SiBootstrap, SiMysql, SiExpo, SiExpress } from "react-icons/si";

const techIcons = {
  HTML: <FaHtml5 className="text-orange-500" title="HTML5" />,
  CSS: <FaCss3Alt className="text-blue-500" title="CSS3" />,
  "React.js": <FaReact className="text-cyan-400" title="React.js" />,
  "React Native": <FaReact className="text-cyan-400" title="React Native" />,
  "Node.js": <FaNodeJs className="text-green-600" title="Node.js" />,
  "Express.js": <SiExpress className="text-gray-400" title="Express.js" />,
  "MySQL": <SiMysql className="text-blue-400" title="MySQL" />,
  "Bootstrap": <SiBootstrap className="text-purple-500" title="Bootstrap" />,
  "JavaScript": <SiJavascript className="text-yellow-400" title="JavaScript" />,
  Shopify: <SiShopify className="text-green-500" title="Shopify" />,
  "Liquid": "",
  "Tailwind CSS": <SiTailwindcss className="text-cyan-300" title="Tailwind CSS" />,
  Figma: <SiFigma className="text-pink-500" title="Figma" />,
  Expo: <SiExpo className="text-black" title="Expo" />,
};

const experiences = [
  {
    role: "Frontend Developer",
    company: "World Academy for Research & Development, UK",
    period: "Apr 2025 - Present",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "React Native", "Node.js", "Express.js", "MySQL", "Expo"],
    description: [
      "Redesigned and developed responsive websites using HTML, CSS, Bootstrap, and JavaScript for improved user experience.",
      "Developed a cross-platform Android application with React Native (Expo) to support student engagement and internal workflows.",
      "Built API-driven systems using Node.js (Express.js) and MySQL for efficient data management and integration.",
      "Designed and implemented modern, dynamic frontend interfaces in React.js to consume APIs and deliver seamless user experiences.",
    ],
  },
  {
    role: "Frontend Developer (Shopify)",
    company: "Softvence Agency",
    period: "Oct 2024 - Nov 2024",
    technologies: ["Shopify", "HTML", "CSS", "JavaScript", "Liquid Template", "Figma"],
    description: [
      "Designed and set up fully functional Shopify stores tailored to client requirements.",
      "Implemented custom designs using Liquid templates and modified theme layouts to match brand identity.",
      "Customized Shopify themes to deliver unique user experiences.",
      "Conducted product research to identify profitable items for client stores.",
      "Configured dropshipping setup, including supplier integration and automation tools.",
      "Uploaded and organized products with optimized descriptions, images, and pricing.",
      "Collaborated with clients to ensure the store design aligned with customer expectations and market trends.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
        <div className="container">

            <div className="common_sec_header" style={{marginBottom: "30px"}}>
                <h3>Experience</h3>
            </div>
            <div className="experience-list">
                {experiences.map((exp, idx) => (
                <div key={idx} className="experience-card">
                    <div className="experience-header">
                    <div>
                        <h3 className="experience-role">{exp.role}</h3>
                        <p className="experience-company">{exp.company}</p>
                    </div>
                    <span className="experience-period">{exp.period}</span>
                    </div>
                    <div className="experience-tech-list">
                    {exp.technologies && exp.technologies.map((tech, i) => (
                        <span key={i} className="experience-tech">
                        {techIcons[tech] || null}
                        {tech}
                        </span>
                    ))}
                    </div>
                    <ul className="experience-desc">
                    {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>

        </div>
    </section>
  );
}