import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "TicTacToe",
    imgSrc: "TicTacToe.png",
    code: "https://github.com/pmas98/TicTacToe",
    projectLink: "https://pmas98.github.io/TicTacToe/",
    tech: ["CSS", "React", "HTML", "JavaScript"],
    description:
      "TicTacToe is a classic game that i actually wanted to make to challenge me and some friends.",
    modalContent: (
      <>
        <p>
          TicTacToe is a classic game, that i actually wanted to make to challenge me and some friends.
          It was really fun to think over the design and the AI&apos;s algorithm.
        </p>
        <p className="highlight">
          The tech stack is based on top of <span>React</span>, creating a matrix and defining a state for every point,
          with an event listener on every point. According to the player&apos;s placement, the AI(which is a series of if&apos;s and elses)
          defines what square they choose.
        </p>
      </>
    ),
  },
  {
    title: "Chatter",
    imgSrc: "Chatter.png",
    code: "https://github.com/pmas98/Chatter",
    projectLink: "https://pmas98.github.io/Chatter/",
    tech: ["React", "Firebase", "NextJS", "Prisma", "NoSQL"],
    description:
      "A messenger app with a minimalistic design. It stores messages, images and authenticates users.",
    modalContent: (
      <>
        <p>
          Chatter was the first project i did after learning firebase and it&apos;s honestly one of my <span>favourites</span>. I love painting and
          mixing cool and warm colors, so designing this was a lot of fun! 
        </p>
        <p>
          On Chatter, the authentication is done throughout firebase, the users can <span> register </span> themselves and <span>login</span>, with <span>hashed</span> passwords and all
          security protocols firebase offers. They can also send images, that get thrown into buckets so each conversation has their own set of images.
        </p>
        <p>
          Don&apos;t forget to say hi to me there!
        </p>
      </>
    ),
  },
  {
    title: "Manage",
    imgSrc: "manage.png",
    code: "https://www.github.com/pmas98/manage",
    projectLink: "https://pmas98.github.io/Manage/",
    tech: ["HTML", "CSS",  "JavaScript"],
    description:
      "This was my first professional front end project. It was built without any frameworks, just pure HTML, CSS and JS.",
    modalContent: (
      <>
        <p>
          This was my first professional front end project. It was built <span>without</span> any <span>frameworks</span>
        </p>
        <p>
          Since i had no experience at the beginning, this was a challenge, from the Frontend Mentor, to build a website for
          a Dashboard like product
        </p>
        <p>
          It was pretty hard, because i had only done a pretty basic web dev course, so most of the stuff you are gonna see
          here came from a lot of <span>trial and error</span>
        </p>
        <p>
          It&apos;s funny to see how much i evolved and learnt from this!
        </p>
      </>
    ),
  },
  {
    title: "Zeus",
    imgSrc: "Zeus.png",
    code: "https://github.com/pmas98/Zeus",
    projectLink: "https://pmas98.github.io/Zeus",
    tech: ["NodeJS", "React", "MongoDB", "Formik"],
    description:
      "A Fullstack app that was a challenge given to me on my internship at VORTEX",
    modalContent: (
      <>
        <p>This is an app for managing a dog&apos;s expenses with food, meds, baths and toys.
            It was built with <span>React</span>, storing the data with <span>MongoDB</span>.
        </p>
        <p>
            I&apos;ve had never done a dashboard before, so learning the charts library, <span>Nivo</span>,
            was pretty interesting!
        </p>
        <p>There also forms where the user enters their expenses, and, by using, <span>Formik</span>, 
           i managed to avoid possible errors, such as the amount of food having a float point number.</p>
        <p>
          I also did some requisites first to make sure the final product solved the main issues, and a 
          button where the user can import their expenses spreadsheet.
        </p>
      </>
    ),
  },
];
