'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  // React.Component must implement the render() function
  render() {
    if (this.state.liked) {
      return 'You liked P.';
    }

    return React.createElement(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Peter'
    );
  }
}


ReactDOM.render(
  React.createElement(LikeButton), // React.createElement(React.Component)
  document.getElementById('like_button_container')
  );