import React from "react";
import { Heading, Slide, Text , SlideProps } from "spectacle";

export const Slide1 = (props: SlideProps) => (
  <Slide {...props}>
    <Heading textColor="secondary">React</Heading>
    <Text>write once, run everywhere™</Text>
  </Slide>
)

export default undefined
