import React from "react";
import { Image, Slide, Text , SlideProps } from "spectacle";
import differentiateEnvironments from "./differentiateEnvironments.png";

export const Slide17 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold textAlign="left">Issue #1</Text>
    <Text italic textAlign="left" textSize="24px">
      We should be able to differentiate implementations per platform if needed, at any level of abstraction
    </Text>

    <Image margin="40px auto" src={differentiateEnvironments} />

    <Text bold textSize="28px">Solution</Text>
    <Text italic textSize="28px">Use babel transformations to have target information available at runtime</Text>
  </Slide>
);

export default undefined
