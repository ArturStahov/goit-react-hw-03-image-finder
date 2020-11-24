import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import styled, { keyframes } from "styled-components";
import { rollIn, rollOut } from 'react-animations';

const bounceAnimation = keyframes`${rollIn}`;
const animOut = keyframes`${rollOut}`;

const Image = styled.img`
height:100%;
width:100%;
object-fit: contain;
`
const Modal = styled.div`
overflow: hidden;
display:flex;
justify-content:center;
align-items:center;
padding:40px;
position: fixed;
top:0;
left:0;
height:100vh;
background-color:rgba(0,0,0,0.7);
`
const ContentBlock = styled.div`
position:relative;
 animation: 1s ${bounceAnimation};

 &.close{
     animation: 0.6s ${animOut};
 }
`
const ButtonClose = styled.button`
position:absolute;
top:10px;
right:10px;
background-color:transparent;
border:2px solid grey;
border-radius:50%;
cursor:pointer;
`
export default class ModalWindows extends Component {

    state = {
        isOut: false,
    }

    componentDidMount() {
        document.body.style.overflow = "hidden"
        window.addEventListener('keydown', this.handlerEscape);
    }

    componentWillUnmount() {
        document.body.style.overflow = "visible"
        window.removeEventListener('keydown', this.handlerEscape);
    }

    handlerEscape = (e) => {
        if (e.code === 'Escape') {
            this.props.onCloseModal()
        }
    }

    fadeoutModal = () => {
        this.setState({
            isOut: true
        })
        setTimeout(
            () => this.props.onCloseModal(),
            500
        );
    }

    render() {
        const { imgUrl } = this.props
        const styled = 'close'

        return (
            <Modal>
                <ContentBlock className={this.state.isOut && styled}>
                    <ButtonClose type="button" onClick={() => { this.fadeoutModal() }}><FontAwesomeIcon icon={faTimesCircle} color="green" size='2x' /></ButtonClose>
                    <Image src={imgUrl} />
                </ContentBlock>
            </Modal>
        )
    }
}