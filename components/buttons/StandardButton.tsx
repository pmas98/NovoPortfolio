import { MouseEventHandler } from "react";
import styles from "./standardbutton.module.scss";
import { motion } from "framer-motion";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
}

export const StandardButton = ({ children, onClick, isActive }: Props) => {
  return(
    <motion.button
      onClick={onClick}
      className={styles.standardButton}
      whileHover={{ scale: 1.15, background: "white", color: "black" }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
)};
