import React from "react";
import { Image, Slide, Text, SlideProps } from "spectacle";
import { BoxShadow } from "../../../components/BoxShadow";
import slide4 from "./slide4.png";

export const Slide4 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold textAlign="left">
      Once upon a time...
    </Text>
    <Text margin="10px 0 50px" textAlign="left">
      a product manager came to us.
    </Text>

    <Text italic margin="0 0 48px 0" textAlign="left" textSize="28px">
      Can we bring the native apps to <strong>feature-parity</strong> with the web app?
    </Text>

    <BoxShadow style={{ padding: 0 }}>
      <Image margin="0" src={slide4} />
    </BoxShadow>
  </Slide>
);

export default undefined;
