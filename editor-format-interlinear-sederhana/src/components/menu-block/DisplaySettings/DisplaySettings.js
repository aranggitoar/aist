import { Component, createElement } from 'react';

const e = createElement;

class MenuBlockDisplaySettings extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'div',
      {
        id: 'menu-load',
        className: 'menu-items',
        onClick: () => this.setState({ liked: true }),
      },
      'Display Settings',
    );
  }
}

export default MenuBlockDisplaySettings;
