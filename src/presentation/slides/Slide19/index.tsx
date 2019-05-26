import React from "react";
import { Image, Slide, SlideProps } from "spectacle";
import componentProxy from "./componentProxy.png";
import platformSpecificButton from "./platformSpecificButton.png";

export const Slide19 = (props: SlideProps) => (
  <Slide {...props}>
    <Image src={platformSpecificButton} />
  </Slide>
);

export const Slide191 = (props: SlideProps) => (
  <Slide {...props}>
    <Image src={componentProxy} />
  </Slide>
);

export default undefined;
