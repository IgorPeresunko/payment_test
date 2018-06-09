import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Title from '../Title'
import Input from './Input'

const propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onBack: PropTypes.func.isRequired,
	onInput: PropTypes.func.isRequired,
	inputs: PropTypes.array.isRequired,
	method: PropTypes.string.isRequired,
	price: PropTypes.shape({
		amount: PropTypes.number,
		currency: PropTypes.string
	})
}

const Form = ({ onSubmit, inputs, onInput, method, price, onBack }) => (
	<Wrapper>
		<Title>Input Your Payment Info</Title>
		<H3>Checkout with { method }. <Back onClick={onBack}>(change)</Back></H3>

		<StyledForm>
			{ inputs.map(i => (
				<Input input={i} key={i.label} onChange={onInput} />
			))}
		</StyledForm>

		<Button onClick={onSubmit}>PAY { price.amount } { price.currency }</Button>
	</Wrapper>
)

const Wrapper = styled.div`
	width: 100%;
`
const StyledForm = styled.form`
	display: flex;
	flex-wrap: wrap;
	margin-top: 50px;
`
const H3 = styled.h3`
	color: #fff;
	font-weight: 100;
	width: 100%;
	text-align: center;
	margin-top: -8px;
`
const Button = styled.button`
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100%;
	padding: 20px;
	background-color: #fff;
	color: #E11E40;
	font-weight: 900;
	border: 0;
	outline: none;
	cursor: pointer;
`
const Back = styled.span`
	margin-left: 5px;
	color: #fff;
	font-size: 14px;
	text-decoration: underline;
	cursor: pointer;
`

Form.propTypes = propTypes

export default Form