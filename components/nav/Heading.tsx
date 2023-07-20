import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  const resumeLink = "https://docs.google.com/document/d/1SogkYpWfiDo9odK9QPlpN7mM8CRysr2Poy5VQrXs-0o/edit?usp=sharing"; // Replace with your actual resume link

  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton onClick={() => window.open(resumeLink, "_blank")}>
        My resume
      </OutlineButton>
    </header>
  );
};
