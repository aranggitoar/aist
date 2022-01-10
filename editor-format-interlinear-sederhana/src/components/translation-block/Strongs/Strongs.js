import { Component, createElement } from 'react';

const e = createElement;

class TranslationBlockStrongs extends Component {
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
        id: 'strongs',
        className: 'translation-items',
        onClick: () => this.setState({ liked: true }),
      },
      'Strongs',
    );
  }
}

export { TranslationBlockStrongs };
