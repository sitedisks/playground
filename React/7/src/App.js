import React from 'react';
import Users from './users/users';
import Button from './buttons/button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Users title="Users" />
      <Button></Button>
    </div>
  );
}

export default App;
