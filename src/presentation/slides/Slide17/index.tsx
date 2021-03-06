import React from "react";
import { Image, Slide, Text, SlideProps } from "spectacle";
import { Emoji } from "../../../components/Emoji";
import differentiateEnvironments from "./differentiateEnvironments.png";

export const Slide17 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold textAlign="left">
      <Emoji value="💻📱" /> Issue #1
    </Text>
    <Text italic textAlign="left" textSize="24px">
      We should be able to differentiate implementations per platform if needed, at any level of abstraction
    </Text>

    <Image margin="40px auto" src={differentiateEnvironments} />

    <Text bold textAlign="left" textSize="28px">
      Solution
    </Text>
    <Text italic textAlign="left" textSize="28px">
      Use <strong>babel transformations</strong> to have target information available at runtime
    </Text>
  </Slide>
);

export default undefined;
