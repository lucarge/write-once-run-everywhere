import React from "react";
import { Image, Slide, Text, SlideProps } from "spectacle";
import demo from "./demo.png";

export const Slide25 = (props: SlideProps) => (
  <Slide {...props}>
    <Text margin="0 0 48px 0" bold>
      Demo
    </Text>

    <Image src={demo} />
  </Slide>
);

export default undefined;
