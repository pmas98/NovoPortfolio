import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import { useState } from "react";
import { TabNavigation } from "./TabNavigation";

const projects = [
  {
    title: "TicTacToe",
    imgSrc: "https://firebasestorage.googleapis.com/v0/b/portfolio-bb550.appspot.com/o/TicTacToe.png?alt=media&token=b2861120-1486-4908-a8c4-91c7f77dbc47",
    code: "https://github.com/pmas98/TicTacToe",
    projectLink: "https://pmas98.github.io/TicTacToe/",
    tech: ["CSS", "React", "HTML", "JavaScript"],
    type: 'Web Dev',
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
    imgSrc: "https://firebasestorage.googleapis.com/v0/b/portfolio-bb550.appspot.com/o/Chatter.png?alt=media&token=f61b4990-8c66-4687-ab88-026d4c75b8d5",
    code: "https://github.com/pmas98/Chatter",
    projectLink: "https://pmas98.github.io/Chatter/",
    tech: ["React", "Firebase", "NextJS", "Prisma", "NoSQL"],
    type: 'Web Dev',
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
    imgSrc: "https://firebasestorage.googleapis.com/v0/b/image-container-1c51c.appspot.com/o/msedge_m1y7kLFTZx.png?alt=media&token=378df4d3-bc38-447b-b8c2-488abb7d5678",
    code: "https://www.github.com/pmas98/djangoauth",
    projectLink: "https://www.github.com/pmas98/djangoauth",
    tech: ["Django", "React", "CSS", "Python", "Auth"],
    type: 'Web Dev',
    description:
      "A Django project with login, register, auth and responsible screens, using SQLite.",
    modalContent: (
      <>
        <p>
          This was a project to learn <span>Django</span> using <span>React</span>
        </p>
        <p>
          Since i had no experience at the beginning, this was a big challenge but i managed it! It has a <span>Crud, Auth and it&apos;s fully responsible</span>
        </p>
        <p>
          It was pretty hard, because i had never done a project using auth before, so most of the stuff you are gonna see
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
    imgSrc: "https://firebasestorage.googleapis.com/v0/b/portfolio-bb550.appspot.com/o/Zeus.png?alt=media&token=67355490-432c-4828-8938-0a2f401768c6",
    code: "https://github.com/pmas98/Zeus",
    projectLink: "https://pmas98.github.io/Zeus",
    tech: ["NodeJS", "React", "MongoDB", "Formik"],
    type: 'Web Dev',
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
  {
    title: "Animal Crossing EDA",
    imgSrc: "https://animalcrossingworld.com/wp-content/uploads/2020/01/animal-crossing-new-horizons-key-artwork-january-2020-large-logo.png",
    code: "https://www.kaggle.com/pedrogcf/animal-crossing",
    projectLink: "https://www.kaggle.com/pedrogcf/animal-crossing",
    tech: ["Python", "Seaborn", "Numpy", "Pandas", "Matplotlib"],
    type: 'Data Science',
    description:
      "An Exploratory Data Analysis over Animal Crossing characters and their popularity!",
    modalContent: (
      <>
        <p>Animal Crossing New Horizons is one of favourite games, it&apos;s so cozy. And it&apos;s also 
            a great game to <span>explore data.</span> There are so many characters!
        </p>
        <p>
            All the charts are done using <span>Seaborn</span>, for aesthetic reasons, while the data processing
            is done with <span>Pandas.</span>
        </p>
        <p>2 datasets were used, one regarding the popularity of each New Horizons character, and another
          one that shows characteristics, such as Gender, Species, Personality.
        </p>
        <p>
          One of the challeging aspects of this project were that i had to <span>join both of these datasets</span>, using as key
          the name of each character, i needed to figure out if there were typing errors or the same name in both databases written in a different way.
          This was done using <span>FuzzyWuzzy</span> a great python library.
        </p>
      </>
    ),
  },
  {
    title: "Web Scaping Pokemon Images",
    imgSrc: "https://www.theclick.gg/wp-content/uploads/2022/11/Pokemon-Anime-Luxton-Dugtrio.webp",
    code: "https://colab.research.google.com/drive/1yoZcIyQR4avMPZ2evK68c_FBd0-tpbFo?authuser=4",
    projectLink: "https://colab.research.google.com/drive/1yoZcIyQR4avMPZ2evK68c_FBd0-tpbFo?authuser=4",
    tech: ["Python", "BeautifulSoup", "UrlLib", "JSON", "Requests"],
    type: 'Data Science',
    description:
      "A code for Web Scraping thousands of images of pokemon on Google Images",
    modalContent: (
      <>
        <p>Creating a machine learning model for detecting pokemon was a long time project that  
            i had, but i never had found the amount of data for it, so i decided <span>to do it myself</span>, with scraping
        </p>
        <p>This code takes an array of pokemon names and iterates over them, creating a 
          folder for every pokemon and then populating it. Finaly, it finds and deletes duplicates.
        </p>
        <p>
          I decided to use 300 images for every pokemon, not only because of storage constraints, but also
          because there aren&apos;t a lot of images for every single pokemon, so 300 it is!
        </p>
      </>
    ),
  },
  {
    title: "Creating a Pokedex using Keras and VGG16",
    imgSrc: "https://images.nintendolife.com/f4e3a801259f8/1280x720.jpg",
    code: "https://colab.research.google.com/drive/1tr9q8rfmHPV2WExxmFIMX7vIjzpaS49Q?usp=sharing",
    projectLink: "https://colab.research.google.com/drive/1tr9q8rfmHPV2WExxmFIMX7vIjzpaS49Q?usp=sharing",
    tech: ["Python", "BeautifulSoup", "UrlLib", "JSON", "Requests"],
    type: 'Data Science',
    description:
      "A pokedex is the dream of every kid that played pokemon, so why not do it using visual computation?",
    modalContent: (
      <>
        <p>Creating a machine learning model for detecting pokemon was a long time project that  
            i had, but i never had found the amount of data for it, so i decided <span>to do it myself</span>, with scraping
        </p>
        <p>This code takes the images of pokemon i got on the previous web scraping project and creates a 
          model by using transfer learning with VGG 16.
        </p>
        <p>
          The model was able to distinguish between 7 differente pokemons with an accuracy of 95%!
        </p>
      </>
    ),
  },{
    title: "Evaluating the toxicity of Youtube Comments",
    imgSrc: "https://m.media-amazon.com/images/I/91o4-BvL0fL._AC_UF1000,1000_QL80_.jpg",
    code: "https://colab.research.google.com/drive/1Ob9tEJ1wIqYRi9RjuMvKKV13ocgNKewY?usp=sharing",
    projectLink: "https://colab.research.google.com/drive/1Ob9tEJ1wIqYRi9RjuMvKKV13ocgNKewY?usp=sharing",
    tech: ["Transformers", "Python" ,"LLM", "Pandas", "AI"],
    type: 'Data Science',
    description:
      "Youtube, just like the Internet, is full of toxicity, so i decided to create a model to help detect it on comments, and filter it for everyone!",
    modalContent: (
      <>  
        <p>Since the <span>transformers</span> architecture has been so popular lately because of ChatGPT, i decided to do   
            my own project on it, tackling a big problem that surrounds Youtube <span>toxic</span> comments
        </p>
        <p>This code uses the Youtube API to get a list of comments using from a playlist or a single video, and then 
          stores it in a <span>Pandas</span> dataframe.
        </p>
        <p>
          After getting the list of comments the model iterates over them and, using the <span>HuggingFace</span> library, and it evaluates
          how toxic a comment is, using the Emotion English DistilRoBERTa-base model.
        </p>
      </>
    ),
  },
];


export const Projects = () => {
  const [selectedTab, setSelectedTab] = useState('Web Dev');
  const filteredProjects = projects.filter((project) => project.type === selectedTab);

  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <TabNavigation onSelectTab={setSelectedTab} />

      <div className={styles.projects}>
        {filteredProjects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

