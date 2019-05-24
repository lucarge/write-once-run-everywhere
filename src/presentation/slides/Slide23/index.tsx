import React from "react";
import { List, ListItem, Slide, SlideProps, Text } from "spectacle";

const Fix = List as any;

export const Slide23 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold textAlign="left">Summary</Text>

    <Fix ordered margin="100px 0">
      <ListItem margin="0 0 20px" textAlign="left" textSize="24px">
        We are taking advantage of the fact that our code is transpiled to hydrate environment information inside the
        runtime. That will allow us to discern for which platform that app was built.
      </ListItem>

      <ListItem margin="0 0 20px" textAlign="left" textSize="24px">
        We are putting a proxy in front of our platform specific implementations, that is using the information
        available thanks to 1 in order to pick the right code at runtime.
      </ListItem>

      <ListItem margin="0 0 20px" textAlign="left" textSize="24px">
        We are taking advantage of the walk-through that the bundler does for packaging our apps to throw away the
        portion of the dependency tree that will never be picked up by the runtime.
      </ListItem>
    </Fix>

    <Text textAlign="left" textSize="28px">So, if we take a look at the updated build graph...</Text>
  </Slide>
);

export default undefined
