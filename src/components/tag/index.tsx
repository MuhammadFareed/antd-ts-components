import React, { FC, ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  title?: string;
  color: string; // "grey" | "pink" | "sky" | "green" | "red" | "orange"
  prefix?: ReactNode;
  suffix?: ReactNode;
  className?: string;
};

const Tag: FC<Props> = props => {
  const { title = "", color, prefix, suffix, className = "" } = props;

  return (
    <div className={[styles.tag, styles[color], className].join(" ")}>
      {prefix && <div className="ml-7 align-center">{prefix}</div>}
      <p className={styles.tag_text}>{title}</p>
      {suffix && <div className="mr-7 align-center">{suffix}</div>}
    </div>
  );
};

export default Tag;
