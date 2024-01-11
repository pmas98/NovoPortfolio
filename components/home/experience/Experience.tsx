import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "BIX TECH",
    position: "Software Engineer",
    time: "2023 - Present",
    location: "Remote",
    description:
      "I help deliver great products, acting on DevOps operations, deploying and testing, developing the products and talking with clients.",
    tech: [
      "Docker",
      "CI/CD",
      "Django",
      "GitHub Actions",
      "Cypress",
      "Automated testing",
      "GCP"
    ],
  },
  {
    title: "INSIDE THE BOX",
    position: "Fullstack Intern",
    time: "2023 - Present",
    location: "Remote",
    description:
      "I helped develop apps and web applications, alongside that i worked on a Machine Learning project, automating a task with OCR.",
    tech: [
      "Docker",
      "ReactNative",
      "Tensorflow",
      "TypeScript",
      "React",
      "Firebase",
      "GCP"
    ],
  },{
    title: "VORTEX",
    position: "AI/ML Intern",
    time: "2023/03 - 2023/09",
    location: "Fortaleza",
    description:
      "I built and scaled ML models using Tensorflow and Keras. Alongside that, i deployed them into REST APIs and develop apps with ReactNative.",
    tech: [
      "Docker",
      "ReactNative",
      "Tensorflow",
      "TypeScript",
      "Firebase",
      "FastAPI",
      "Python"
    ],
  },
  {
    title: "GOOGLE",
    position: "Data Analysis Intern",
    time: "2021 - 2022",
    location: "Remote",
    description:
      "I did dashboards and analysis for stakeholders, using tools such as DataStudio and SQL. My biggest projects were the 2022 Plan for YouTube on Brazil's Video Market, and the Black Friday for 2021.",
    tech: ["Plx", "SQL", "PowerBI", "Tableau", "DataStudio"],
  },
  {
    title: "CEMP",
    position: "Volunteer",
    time: "2018 - 2019",
    location: "Fortaleza",
    description:
      "This was a program to encourage enterpreneurism inside universities, i learnt a lot on how to work with clients, deal with schedules and partners!",
    tech: [
    ],
  },
];
