import { Component, createElement } from 'react';

const e = createElement;

class TranslationBlockMorphology extends Component {
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
        id: 'morphology',
        className: 'translation-items',
        onClick: () => this.setState({ liked: true }),
      },
      'Morphology',
    );
  }
}

export { TranslationBlockMorphology };
