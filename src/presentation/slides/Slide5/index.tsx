import React from "react";
import { List, ListItem, Slide, Text, SlideProps } from "spectacle";

export const Slide5 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold textAlign="left">
      What were the options?
    </Text>

    <List margin="100px 0 0">
      <ListItem margin="20px 0" textSize="24px">
        Bringing the existing native apps up-to-date
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        Developing a hybrid app with Ionic/Cordova and reuse the web app
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        Developing a unified app by using React Native
      </ListItem>
    </List>
  </Slide>
);

export default undefined;
