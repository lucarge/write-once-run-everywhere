import React from "react";
import { Image, Slide, Text } from "spectacle";
import differentiateEnvironments from "./differentiateEnvironments.png";

export const Slide17 = () => (
  <Slide>
    <Text bold textAlign="left">Issue #1</Text>
    <Text italic textAlign="left" textSize="24px">
      We should be able to differentiate implementations per platorm if needed, at any level of abstraction
    </Text>

    <Image margin="40px auto" src={differentiateEnvironments} />

    <Text bold textSize="28px">Solution</Text>
    <Text italic textSize="28px">Use babel transformations to have target informations available at runtime</Text>
  </Slide>
);
