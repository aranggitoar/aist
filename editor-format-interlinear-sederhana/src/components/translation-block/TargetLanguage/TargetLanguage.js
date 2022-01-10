import { Component, createElement } from 'react';

const e = createElement;

class TranslationBlockTargetLanguage extends Component {
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
        id: 'target-language',
        className: 'translation-items',
        onClick: () => this.setState({ liked: true }),
      },
      'Target Language',
    );
  }
}

export { TranslationBlockTargetLanguage };
