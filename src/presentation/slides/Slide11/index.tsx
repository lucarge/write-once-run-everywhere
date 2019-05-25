import React from "react";
import { List, ListItem, Slide, Text , SlideProps } from "spectacle";

export const Slide11 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold textAlign="left">React and React Native</Text>
    <Text textAlign="left">are <strong>not mutually exclusive</strong>!</Text>

    <List margin="100px 0">
      <ListItem margin="0 0 20px" textAlign="left" textSize="24px">
        React is a JavaScript library for building user interfaces
      </ListItem>

      <ListItem margin="0 0 20px" textAlign="left" textSize="24px">
        ReactDOM is the default renderer for React, targeting browsers
      </ListItem>

      <ListItem margin="0 0 20px" textAlign="left" textSize="24px">
        React Native is a renderer for React, targeting Android and iOS
      </ListItem>

      <ListItem margin="0 0 20px" textAlign="left" textSize="24px">
        There are many other renderers, like React Native Windows and Ink
      </ListItem>
    </List>
  </Slide>
)

export default undefined
