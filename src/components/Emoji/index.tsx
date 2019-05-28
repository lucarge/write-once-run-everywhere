import React from "react";

type Props = {
  style?: {};
  value: string;
};

export const Emoji = ({ style, value }: Props) => (
  <span aria-label="emoji" role="img" style={style}>
    {value}
  </span>
);

export default undefined;
