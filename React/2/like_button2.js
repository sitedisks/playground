'use strict';

class LikeButton2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log('clicked 2')
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    if(this.state.isToggleOn){
      console.log('trigger it 2');
    }
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}


ReactDOM.render(
  // React.createElement(LikeButton), // React.createElement(React.Component)
  <LikeButton2 />,
  document.getElementById('like_button_container2')
  );