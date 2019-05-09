import React from "react";
import { Heading, Slide, Text } from "spectacle";

export const Slide1 = () => (
  <Slide transition={['zoom']} bgColor="primary">
    <Heading caps lineHeight={1} size={1} textAlign="left" textColor="secondary">
      React
    </Heading>
    <Text bold margin="10px 0 0" textAlign="left" textColor="tertiary">
      write once, run everywhere™
    </Text>
  </Slide>
)

export default undefined
