import React from "react";
import { List, ListItem, Slide, Text } from "spectacle";

export const Slide26 = () => (
  <Slide>
    <Text bold textAlign="left">The missing bits</Text>
    <Text textAlign="left">we don't have time to talk about</Text>

    <List margin="100px 0">
      <ListItem margin="20px 0" textSize="24px">
        Building a styling system that works cross platform.
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        Building a grid system that works cross platform. Spoiler: you need to embrace the flexbox.
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        Unified routing system with React Router 4.
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        And many, many more things ...
      </ListItem>
    </List>
  </Slide>
);

export default undefined
