import React from "react";
import { List, ListItem, Slide, Text , SlideProps } from "spectacle";

export const Slide9 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold textAlign="left">Nevertheless, we saw a lot of potential</Text>
    <Text textAlign="left">in the technology</Text>

    <List margin="100px 0">
      <ListItem margin="20px 0" textSize="24px">
        We could share business logic between the web app and the mobile apps
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        The technology would be easier to pick up for the frontend team, compared to going full Native
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        If we needed juice in performance, we would be free to go full Native "over the bridge"
      </ListItem>
    </List>

    <Text italic textAlign="left" textSize="24px">However, we still need to write the UI twice.</Text>
  </Slide>
);

export default undefined
