import React, { Component } from "react";
import Counter from "./counterComponent";
import { Button, Header, Flag, Input, List } from "semantic-ui-react";
class Counters extends Component {
  render() {
    const { onDelete, onIncrement, counters, onDecrement } = this.props;
    return (
      <div>
        <List>
          <List.Item icon="users" content="Valuebound" />
          <List.Item icon="marker" content="HSR Layout, Bangalore." />
          <List.Item
            icon="mail"
            content={
              <a href="mailto:ahmadilyas@valuebound.com">ahmadilyas@valuebound.com</a>
            }
          />
          <List.Item
            icon="linkify"
            content={<a href="http://www.ahmadlimbad.com">ahmadlimbada.com</a>}
          />
        </List>
        <div>
          <Header as="h1">First Header</Header>{" "}
          <Input icon="search" placeholder="Search..." /> <Flag name="in" />
          <Header as="h2">Second Header</Header>
          <Header as="h3">Third Header</Header>
          <Header as="h4">Fourth Header</Header>
          <Header as="h5">Fifth Header</Header>
          <Header as="h6">Sixth Header</Header>
        </div>
        <div>
          <Button content="Primary" primary />
          <Button content="Secondary" secondary />
        </div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
