import { Component, createElement } from 'react';

const e = createElement;

class MenuBlockSave extends Component {
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
        id: 'menu-save',
        className: 'menu-items',
        onClick: () => this.setState({ liked: true }),
      },
      'Save File',
    );
  }
}

export default MenuBlockSave;
