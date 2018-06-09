import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import Title from '../Title'
import SelectCountry from './SelectCountry'

const propTypes = {
	methods: PropTypes.array.isRequired,
	onChoose: PropTypes.func.isRequired,
	onChangeCountry: PropTypes.func.isRequired,
	activeCountry: PropTypes.string.isRequired
}

const PayMethods = ({ methods, onChoose, onChangeCountry, activeCountry }) => (
	<Wrapper>
		<Title>Choose pay method</Title>
		<Methods>{
			methods.map(m =>
				<Method key={m.id} onClick={() => onChoose(m.id)}>
					<Img src={m.img_url} />
					<Name>{ m.name }</Name>
				</Method>
		)}</Methods>

		<SelectCountry onSelect={onChangeCountry} active={activeCountry} />
	</Wrapper>
)

const Wrapper = styled.div`
	width: 100%;
`
const Methods = styled.div`
	display: flex;
	flex-wrap: wrap;	
	margin-top: 50px;
`
const animAppear = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`
const Method = styled.div`
	width: calc(50% - 20px);
	margin: 10px;
	padding: 5px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 7px 15px rgba(0, 9, 128, 0.05), 0 12px 28px rgba(0, 9, 128, 0.075);
	transition: .2s;
	animation: ${animAppear} .4s forwards;
	cursor: pointer;

	&:hover {
		transform: translateY(3px);
	}
`
const Img = styled.img`
	
`
const Name = styled.span`
	margin: 5px 0;
`

PayMethods.propTypes = propTypes

export default PayMethods