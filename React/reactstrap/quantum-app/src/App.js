import React from 'react';
import './App.css';
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <h2>Test</h2>
      <div>
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
      </div>
    </div>
  );
}

export default App;
