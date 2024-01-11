import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">FastAPI</span>
            <span className="chip">React</span>
            <span className="chip">Django</span>
            <span className="chip">NodeJS</span>
            <span className="chip">CI/CD</span>
            <span className="chip">GitHub Actions</span>
            <span className="chip">Postgres</span>
            <span className="chip">SQL</span>
            <span className="chip">GCP</span>
            <span className="chip">Docker</span>
            <span className="chip">Cypress</span>            
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Tableau</span>
            <span className="chip">PowerBI</span>
            <span className="chip">Java</span>
            <span className="chip">SpringBoot</span>
            <span className="chip">Figma</span>
            <span className="chip">AWS</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Redis</span>
            <span className="chip">ElasticSearch</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
