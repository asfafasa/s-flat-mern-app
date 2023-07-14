import React from "react";

import styles from "./Button.module.css";

type Props = {
  title: string;
  color: string;
  textColor: string;
  onCLick?: () => void;
  border?: string;
};

const Button = (props: Props) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: props.color,
          color: props.textColor,
          border: props.border,
        }}
        className={styles.button}
        onClick={props.onCLick}
      >
        <p style={{ color: props.textColor }}>{props.title}</p>
      </button>
    </div>
  );
};

export default Button;
