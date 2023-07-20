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
    title: "VORTEX",
    position: "AI/ML Intern",
    time: "2023 - Present",
    location: "Fortaleza",
    description:
      "I help build and scale ML models using Tensorflow and Keras. Alongside that, i deploy them into REST APIs and develop apps with ReactNative.",
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
