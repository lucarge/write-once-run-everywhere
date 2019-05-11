import React from "react";
import { List, ListItem, Slide, Text } from "spectacle";

export const Slide9 = () => (
  <Slide>
    <Text bold textAlign="left">Still, we saw a lot of potential</Text>
    <Text textAlign="left">in the technology</Text>

    <List margin="100px 0">
      <ListItem margin="20px 0" textSize="24px">
        We could share business logic between the dashboard and the app
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        The technology would be easier to pick up for the frontend team, compared to going full Native
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        When we need juice in performance, we're free to go full Native "over the bridge"
      </ListItem>
    </List>

    <Text italic textAlign="left" textSize="24px">But still, we need to write the UI twice.</Text>
  </Slide>
)

export default undefined
