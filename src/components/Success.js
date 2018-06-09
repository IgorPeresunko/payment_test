import React, { Component } from 'react'
import styled from 'styled-components'

import Title from './Title'

export default class Success extends Component {
	
	state = {
		seconds: 3
	}

	componentDidMount = () => {
		const interval = setInterval(() => {

			if (this.state.seconds === 0) {
				clearInterval(interval)
				return this.props.onFinish()
			}

			this.setState({ seconds: this.state.seconds - 1 })
		}, 1000)
	}
	
	render() {
		return (
			<Wrapper>
				<Title>Your payment has been successfully received</Title>
				<Message>
					We will redirect you back to site in
					<Seconds>{ this.state.seconds }</Seconds>
				</Message>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	width: 100%;
`
const Message = styled.div`
	color: #fff;
	padding: 40px 0;
	text-align: center;
`
const Seconds = styled.div`
	font-size: 32px;
	margin: 10px 0;
`
