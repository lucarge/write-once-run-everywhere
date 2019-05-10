import React from "react";
import { List, ListItem, Slide, Text } from "spectacle";

export const Slide5 = () => (
  <Slide>
    <Text bold textAlign="left">What were the choices?</Text>

    <List margin="100px 0 0">
      <ListItem margin="20px 0" textSize="24px">
        Bringing the existing native app up-to-date
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        Developing an hybrid app with Ionic/Cordova and reuse the web dashboard
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        Using React Native
      </ListItem>
    </List>
  </Slide>
)

export default undefined
