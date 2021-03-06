import React from "react";
import { Image, Slide, SlideProps } from "spectacle";
import whoAmI from "./whoAmI.png";

export const Slide2 = (props: SlideProps) => (
  <Slide {...props}>
    <Image src={whoAmI} />
  </Slide>
);

export default undefined;
