import React from "react";
import { Image, Slide, SlideProps } from "spectacle";
import { BoxShadow } from "../../../components/BoxShadow";
import whoAmI from "./whoAmI.png";

export const Slide2 = (props: SlideProps) => (
  <Slide {...props}>
    <BoxShadow style={{ padding: 0 }}>
      <Image margin="0" src={whoAmI} />
    </BoxShadow>
  </Slide>
);

export default undefined;
