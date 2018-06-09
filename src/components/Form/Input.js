import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	input: PropTypes.shape({
		value: PropTypes.string,
		label: PropTypes.string,
		placeholder: PropTypes.string,
		error: PropTypes.string,
		length: PropTypes.number,
		width: PropTypes.number,
	}),
	onChange: PropTypes.func.isRequired
}

const Input = ({ onChange, input }) => (
	<Wrapper width={input.width}>
		<Label>{ input.label }</Label>
		<StyledInput
			name={input.name}
			type="text"
			placeholder={input.placeholder}
			value={input.value}
			maxLength={input.length}
			onChange={onChange}
		/>
		<Error>{ input.error }</Error>
	</Wrapper>
)

const Wrapper = styled.div`
	width: ${props => props.width}%;
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;
`
const Label = styled.span`
	margin: 0 6px;
	color: #fff;
	text-transform: uppercase;
	font-size: 11px;
	font-weight: 600;
	font-family: 'Montserrat', sans-serif;
	letter-spacing: .4px;
`
const StyledInput = styled.input`
	width: calc(100% - 28px);
	padding: 9px;
	margin: 5px auto 2px;
	border: 0;
	border-radius: 6px;
	background-color: rgba(250, 250, 250, .2);
	color: #fff;
	font-size: 14px;
	outline: none;

	&::placeholder {
		color: rgba(250, 250, 250, .8);
	}
`
const Error = styled.span`
	margin: 0 6px;
	color: #C1BECC;
	font-size: 12px;
	font-weight: 600;
	font-family: 'Montserrat', sans-serif;
`

Input.propTypes = propTypes

export default Input