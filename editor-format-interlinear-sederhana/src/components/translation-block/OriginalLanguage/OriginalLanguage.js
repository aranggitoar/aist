import { Component, createElement } from 'react';

const e = createElement;

class TranslationBlockOriginalLanguage extends Component {
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
        id: 'original-language',
        className: 'translation-items',
        onClick: () => this.setState({ liked: true }),
      },
      'Original Language',
    );
  }
}

export { TranslationBlockOriginalLanguage };
