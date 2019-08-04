'use strict'

var d1d = 'Elsie'

const element = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see {d1d} here.</h2>
      <span>you define the tag and properties within the JSX, and the component must start with a capital letter</span>
      <ul>
      <FnName name="Jeef"></FnName>
      <FnName name="Sara"></FnName>
      <FnName name="Chealp"></FnName>
      </ul>
    </div>
  );

// this is the function / Class Components
function FnName(props){
  return <li>My name is {props.name}</li>
}

ReactDOM.render(
    element,
    document.getElementById('babalcase')
)