import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import {TypeAnimation} from 'react-type-animation';
import { OutlineButton } from "@/components/buttons/OutlineButton";

export const Hero = () => {

  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Pedro<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <TypeAnimation sequence={['Data Scientist', 2000, 'Web Developer', 2000 ,'CS Student', 2000]} speed={1} repeat={Infinity}></TypeAnimation>  
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I&apos;m a chemical engineer that fell in love for
            programming. I got years of experience working with
            Data Analysis and Web Development on some cool stuff!
            Let&apos;s connect!
          </p>
        </Reveal>
        <Reveal>
          <OutlineButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </OutlineButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
