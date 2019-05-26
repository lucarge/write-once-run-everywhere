import React, { CSSProperties, ReactNode } from "react";

type Props = CSSProperties & {
  children: ReactNode;
};

export const Row = ({
  alignItems = "stretch",
  children,
  flexBasis = "auto",
  flexWrap = "nowrap",
  flexGrow = 1,
  justifyContent = "flex-start",
  flexShrink = 1,
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
      flexDirection: "row",
    }}
  >
    {children}
  </div>
);

export default undefined;
