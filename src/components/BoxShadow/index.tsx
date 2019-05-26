import React, { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  shadow?: "z1" | "z2" | "z3" | "z4" | "z5";
  style?: CSSProperties;
};

const shadows = {
  z1: "0 1px 2px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.08), 0 0 2px 0 rgba(0, 0, 0, 0.1)",
  z2: "0 2px 5px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.08), 0 0 2px 0 rgba(0, 0, 0, 0.1)",
  z3: "0 5px 10px rgba(0, 0, 0, 0.08), 0 15px 35px rgba(0, 0, 0, 0.08), 0 0 2px 0 rgba(0, 0, 0, 0.1)",
  z4: "0 10px 20px rgba(0, 0, 0, 0.08), 0 20px 40px rgba(0, 0, 0, 0.08), 0 0 2px 0 rgba(0, 0, 0, 0.1)",
  z5: "0 18px 38px rgba(0, 0, 0, 0.08), 0 35px 65px rgba(0, 0, 0, 0.08), 0 0 2px 0 rgba(0, 0, 0, 0.1)",
};

export const BoxShadow = ({ children, shadow = "z5", style = {} }: Props) => {
  const styles = {
    boxShadow: shadows[shadow],
    display: "inline-block",
    padding: "0 16px",
    ...style,
  };

  return <div style={styles}>{children}</div>;
};
