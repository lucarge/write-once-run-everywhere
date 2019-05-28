import React from "react";
import { Image, Slide, Text, SlideProps } from "spectacle";
import notNecessary from "./not-necessary.png";

export const Slide13 = (props: SlideProps) => (
  <Slide {...props}>
    <Text>Why do we need to write</Text>
    <Text margin="0 0 48px 0" bold>
      React code twice?
    </Text>

    <Image src={notNecessary} />
  </Slide>
);

export default undefined;
