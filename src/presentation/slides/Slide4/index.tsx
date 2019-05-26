import React from "react";
import { Slide, Text, SlideProps } from "spectacle";

export const Slide4 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold textAlign="left">
      Once upon a time...
    </Text>
    <Text margin="10px 0 50px" textAlign="left">
      a product manager came to us.
    </Text>

    <Text italic textAlign="left" textSize="28px">
      Can we bring the native apps to <strong>feature-parity</strong> with the web app?
    </Text>
  </Slide>
);

export default undefined;
