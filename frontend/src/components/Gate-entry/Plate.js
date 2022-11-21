import React, { Component } from 'react';
import { Alert, Spinner, Button, Container } from 'react-bootstrap';
// import "./card.css"

export class plate extends Component {
  render() {
    return (
      <Container classname="Profile">
        <Alert variant="success">
          <Alert.Heading>Hey, {this.props.dataFromParent}. </Alert.Heading>
          <p>Please ask the Home Owner for approval</p>
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
          </Button>{' '}
        </Alert>
      </Container>
    );
  }
}
export default plate;
