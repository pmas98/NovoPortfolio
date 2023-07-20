import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/pedro-gabriel-carvalho-63661878/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link href="https://github.com/pmas98" target="_blank" rel="nofollow">
              Github
            </Link>{" "}
            if that`&apos;`s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:pmas98@hotmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>pmas98@hotmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
