import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import config from '../../config'

const propTypes = {
	onSelect: PropTypes.func.isRequired,
	active: PropTypes.string
}

const SelectCountry = ({ onSelect, active }) => (
	<Wrapper>
		<Message>Didn't find your pay method? Try to select your country</Message>
		<select onChange={onSelect} defaultValue={active}>{
			config.countries.map(c => (
				<option value={c.code} key={c.code}>{c.name}</option>
			))
		}</select>
	</Wrapper>
)

const Wrapper = styled.div`
	width: 100%;
	text-align: center;
	margin-top: 30px;
	color: #fff;
`
const Message = styled.div`
	margin: 10px;
`

SelectCountry.propTypes = propTypes

export default SelectCountry