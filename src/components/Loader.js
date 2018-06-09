import React from 'react'
import styled, { keyframes } from 'styled-components'


const Loader = () => (
	<Wrapper />
)

const loader = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(220deg);
	}
`
const loader2 = keyframes`
	0% {
		transform: rotate(-140deg);
	}
	100% {
		transform: rotate(140deg);
	}
`

const Wrapper = styled.div`
	animation: ${loader} 1.5s linear infinite;
	clip: rect(0, 40px, 40px, 20px); 
	height: 40px;
	width: 40px;
	position: absolute;
	left: calc(50% - 20px);
	top: calc(50% - 20px);

	&:after {
		animation: ${loader2} 1.5s ease-in-out infinite;
		clip: rect(0, 40px, 40px, 20px);
		content:'';
		border-radius: 50%; 
		height: 40px;
		width: 40px;
		position: absolute;
		box-shadow: inset #fff 0 0 0 2px;
	}
`

export default Loader