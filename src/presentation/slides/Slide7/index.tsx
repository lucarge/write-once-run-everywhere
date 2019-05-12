import React from "react";
import { List, ListItem, Slide, Text } from "spectacle";

export const Slide7 = () => (
  <Slide>
    <Text bold textAlign="left">React Native wasn't in a great shape</Text>
    <Text textAlign="left">at the time...</Text>

    <List margin="100px 0 0">
      <ListItem margin="20px 0" textSize="24px">
        Lots of unresolved issues
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        Lots of breaking changes between versions, that made upgrading hard
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        Uncertainty about the future of the project inside Facebook
      </ListItem>
    </List>
  </Slide>
)

export default undefined
