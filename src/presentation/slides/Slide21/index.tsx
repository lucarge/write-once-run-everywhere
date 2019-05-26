import React from "react";
import { Slide, Text, SlideProps } from "spectacle";

export const Slide21 = (props: SlideProps) => (
  <Slide {...props}>
    <Text textAlign="left">Using dynamic imports</Text>
    <Text bold textAlign="left">
      has a bunch of issues
    </Text>

    <Text margin="80px 0 0" textAlign="left" textSize="24px">
      Unfortunately, not only basing your abstraction layer on dynamic imports will kill the performance of your app
      (since each proxy produces a new network request), but in the React Native world this is not even an option, since
      the whole runtime should be <strong>bundled inside the same binary</strong> when submitting to the App Store.
    </Text>
    <Text margin="40px 0 0" textAlign="left" textSize="24px">
      There should be a better way...
    </Text>
  </Slide>
);

export default undefined;
