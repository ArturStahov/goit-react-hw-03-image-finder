import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Image, Modal, ContentBlock, ButtonClose } from './StyledComponent';
import PropTypes from 'prop-types';

export default class ModalWindows extends Component {
  static propTypes = {
    imgUrl: PropTypes.string.isRequired,
  };

  state = {
    isOut: null,
    timeOut: null,
  };

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', this.handlerEscape);
  }

  componentWillUnmount() {
    document.body.style.overflow = 'visible';
    window.removeEventListener('keydown', this.handlerEscape);
    clearTimeout(this.state.timeOut);
  }

  handlerEscape = e => {
    if (e.code === 'Escape') {
      this.fadeoutModal();
    }
  };

  fadeoutModal = () => {
    this.setState({
      isOut: true,
    });
    const timeId = setTimeout(() => this.props.onCloseModal(), 500);
    this.setState({
      timeOut: timeId,
    });
  };

  onLoadImage = () => {
    this.setState({
      isOut: false,
    });
  };

  render() {
    const { imgUrl } = this.props;
    const styledClose = 'close';
    const styledOpen = 'open';
    const { isOut } = this.state;
    return (
      <Modal>
        <ContentBlock className={isOut ? styledClose : styledOpen}>
          <ButtonClose
            className={isOut ? styledClose : styledOpen}
            type="button"
            onClick={() => {
              this.fadeoutModal();
            }}
          >
            <FontAwesomeIcon icon={faTimesCircle} color="green" size="2x" />
          </ButtonClose>
          <Image src={imgUrl} onLoad={this.onLoadImage} />
        </ContentBlock>
      </Modal>
    );
  }
}
