import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
export const About = () => {
  
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About me" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hi! I&apos;m Pedro, if you haven&apos;t already gathered that by
              now. I&apos;m a Chemical Engineer currently studying computer science from Fortaleza,
              Brazil. I specialize in <span>Machine Learning</span>, primarily visual computing, but i
              love building with whatever tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently work at BIX TECH as a <span>software engineer</span>. Lately, i prefer to work
              mainly on the backend side, but for a long time i used to work on developing the frontend of personal 
              projects(i also <span className={styles.loveText}>love </span>
              <motion.span
                initial={{color: "#FFF", backgroundColor: "rgb(17, 17, 17)"}}
                animate={{color: "#000", backgroundColor: "rgb(219, 255, 77)"}} 
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }} 
              >
                 doing animations!
              </motion.span>).
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I do a lot of stuff. Lately, i&apos;ve been really interested on 
              <span> vector databases</span>. But if you don&apos;t catch me programming, i&apos;m probably
              painting or reading fantasy novels!
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m passively looking for new positions where I can learn new stuff
              and apply them. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
