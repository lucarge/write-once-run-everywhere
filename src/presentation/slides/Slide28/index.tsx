import React from "react";
import { Slide, Text , SlideProps } from "spectacle";

export const Slide28 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold>Thank you!</Text>

    <Text bold margin="200px 0 0" textAlign="left" textSize="28px">Links</Text>
    <Text  margin="20px 0 0" textAlign="left" textColor="tertiary" textSize="24px">
      https://twitter.com/lucarge
    </Text>
    <Text margin="20px 0 0" textAlign="left" textColor="tertiary" textSize="24px">
      https://github.com/lucarge
    </Text>

    <Text bold margin="200px 0 0" textAlign="left" textSize="24px">And if you want to work with me</Text>
    <Text margin="20px 0 0" textAlign="left" textSize="24px">
      apply at
      {' '}
      <span style={{ color: '#03A9FC' }}>https://bit.ly/2WYUUq5</span>
    </Text>
  </Slide>
)

export default undefined
