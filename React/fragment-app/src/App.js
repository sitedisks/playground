import React, { Fragment } from 'react';
import './App.css';
import Ref from './Components/RefPage';


const Temp = (props) => {
 
  return (
    <Fragment>
      <div>{props.greeting}</div>
      <div>Hello</div>
      <div>Val: {props.val}</div>
    </Fragment>
  );

}

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      var: 1
    }
  }

  render() {
 
    return (
      <div className="App">
        <Temp greeting="hi" val={this.state.var} />
        <Ref />
      </div>
    );
  }

}

export default App;
