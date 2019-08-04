'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log('clicked')
    this.setState(state=> ({
      isToggleOn:true
    }));
  }

  render() {
    if (this.state.isToggleOn) {
      console.log('trigger it');
      return 'You isToggleOn P.';
    }

    return (
      <button onClick={this.handleClick}>
        Peter
      </button>
    );
  }
}


ReactDOM.render(
  // React.createElement(LikeButton), // React.createElement(React.Component)
  <LikeButton />,
  document.getElementById('like_button_container')
  );