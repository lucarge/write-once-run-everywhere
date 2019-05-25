import React from "react";
import { List, ListItem, Slide, Text , SlideProps } from "spectacle";

export const Slide26 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold textAlign="left">The road to a fully unified app</Text>
    <Text textAlign="left">The missing bits...</Text>
    <Text textAlign="left">we don't have time to talk about</Text>

    <List margin="100px 0">
      <ListItem margin="20px 0" textSize="24px">
        Building a <strong>styling system</strong> that works across platforms.
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        Building a <strong>grid system</strong> that works across platforms. Spoiler: you need to embrace the flexbox.
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        Unified <strong>routing system</strong> with React Router 4.
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        And many, many more things...
      </ListItem>
    </List>
  </Slide>
);

export default undefined
