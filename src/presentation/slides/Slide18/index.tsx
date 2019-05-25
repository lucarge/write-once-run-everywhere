import React from "react";
import { Slide, Text , SlideProps } from "spectacle";

export const Slide18 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold textAlign="left">Issue #2</Text>
    <Text italic textAlign="left" textSize="24px">
      Platform agnostic abstractions should be able to reference, and use, platform specific implementations,
      without having to be written twice
    </Text>

    <Text bold margin="80px 0 10px" textAlign="left" textSize="28px">Solution</Text>
    <Text italic margin="20px 0 0" textAlign="left" textSize="24px">
      If you forget about the frontend world for a minute, this issue is not uncommon at all.
    </Text>
    <Text italic margin="20px 0 0" textAlign="left" textSize="24px">
      Borrowing from the devops world some knowledge, how do we manage to make containers with dynamic IPs available to
      be reached from the outside world?
    </Text>
    <Text bold italic margin="20px 0 0" textAlign="left" textSize="24px">With a PROXY!</Text>
    <Text italic margin="20px 0 0" textAlign="left" textSize="24px">
      So, in front of our dynamic, platform specific implementations, we can try to put a proxy as well...
    </Text>
  </Slide>
);

export default undefined
