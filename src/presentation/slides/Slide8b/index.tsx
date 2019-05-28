import React from "react";
import { Image, Slide, SlideProps } from "spectacle";
import facepalm from "./facepalm.png";

export const Slide8b = (props: SlideProps) => (
  <Slide {...props}>
    <Image src={facepalm} />
  </Slide>
);

export default undefined;
