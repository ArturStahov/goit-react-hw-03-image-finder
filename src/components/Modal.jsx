import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';
import { rollIn, rollOut } from 'react-animations';
import PropTypes from 'prop-types';

const animIn = keyframes`${rollIn}`;
const animOut = keyframes`${rollOut}`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
const Modal = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
`;
const ContentBlock = styled.div`
  position: relative;
  opacity: 0;
  transition-property: opacity;
  transition-delay: 0.3s;
  &.open {
    opacity: 1;
    animation: 1s ${animIn};
  }

  &.close {
    animation: 0.6s ${animOut};
    opacity: 0;
  }
`;
const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: 2px solid grey;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  transition-property: opacity;
  transition-delay: 4s;
  &.open {
    opacity: 1;
  }
  &.close {
    opacity: 0;
  }
`;
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

    return (
      <Modal>
        <ContentBlock className={this.state.isOut ? styledClose : styledOpen}>
          <ButtonClose
            className={this.state.isOut ? styledClose : styledOpen}
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
