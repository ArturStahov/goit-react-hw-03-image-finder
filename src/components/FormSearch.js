import React, { Component } from 'react'
import styled from 'styled-components'

const Form = styled.form`
max-width:350px;
margin:0 auto;
`
const Input = styled.input`
width:100%;
height:30px;
border: 2px solid black;
border-radius:0.5rem;
padding-left: 10px;
font-size:1rem;
`

export default class FormSearch extends Component {

    state = {
        inputValue: ''
    }

    handleInput = e => {
        this.setState({
            inputValue: e.target.value,
        })
    }

    handlerForm = e => {
        e.preventDefault()

        this.props.onSearch(this.state.inputValue)
        this.setState({
            inputValue: ''
        })
    }

    render() {
        return (
            <Form onSubmit={this.handlerForm}>
                <Input type="text" value={this.state.inputValue} onChange={this.handleInput} placeholder="Search images and photos" />
            </Form>
        )
    }
}