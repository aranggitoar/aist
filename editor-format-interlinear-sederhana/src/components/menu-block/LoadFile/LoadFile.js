import * as React from 'react';
import styled from 'styled-components';
// import { request } from 'request';

const e = React.createElement;

class MenuBlockLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filename: '',
      filepath: ''
    };
  }

  labelElement() {
    return e(
      'label',
      {
        htmlFor: 'menu-load-file',
      },
      'Buka File',
    );
  }

  inputElement() {
    return e(
      'input',
      {
        id: 'menu-load-file',
        type: 'file',
        onChange: () => {
          this.setState(
            {
              filename: document.querySelector('#menu-load-file').files[0].name,
              filepath: document.querySelector('#menu-load-file').files[0].path,
            },
          );
        },
      },
    );
  }

  buttonElement() {
    return e(
      'button',
      {
      },
      'Unggah',
    );
  }

  fileNameSpanElement() {
    return e(
      'span',
      {
        id: 'loaded-file-name',
      },
      this.state.filename,
    );
  }

  formElement() {
    if (this.state.filename !== '') {
      return e(
        'form',
        {
          className: 'menu-items',
        },
        this.labelElement(),
        this.inputElement(),
        this.fileNameSpanElement(),
        this.buttonElement(),
      );
    }
    return e(
      'form',
      {
        className: 'menu-items',
      },
      this.labelElement(),
      this.inputElement(),
      this.buttonElement(),
    );
  }

  // uploadRequestHandler(filename) {

  // }

  render() {
    return this.formElement();
  }
}

export default MenuBlockLoad;
