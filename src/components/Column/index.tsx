import React, { CSSProperties, ReactNode } from "react";

type Props = CSSProperties & {
  children: ReactNode;
};

export const Column = ({
  alignItems = "stretch",
  children,
  flexBasis = "auto",
  flexWrap = "nowrap",
  flexGrow = 0,
  justifyContent = "flex-start",
  flexShrink = 0,
  ...props
}: Props) => (
  <div
    style={{
      ...props,
      alignItems,
      flexBasis,
      flexWrap,
      flexGrow,
      justifyContent,
      flexShrink,
      display: "flex",
      flexDirection: "column",
    }}
  >
    {children}
  </div>
);

export default undefined;
