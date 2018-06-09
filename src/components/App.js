import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import PaymentContainer from './PaymentContainer'

import styles from '../themes/default'

const propTypes = {
	config: PropTypes.shape({
		amount: PropTypes.number,
		currency: PropTypes.string
	}).isRequired,
	onSuccess: PropTypes.func.isRequired
}

const App = ({ config, onSuccess }) => (
	<Wrapper>
		<PaymentContainer config={config} onSuccess={onSuccess} />
	</Wrapper>
)

const Wrapper = styled.div`
	position: relative;
	width: 320px;
	height: 500px;
	display: flex;
	padding: 20px;
	border-radius: 0.5rem;
	/* background: linear-gradient(45deg, #fd81b5 0%, #c961f7 50%, #8089ff 100%); */
	background: linear-gradient(45deg, #008bee, #2387eb 2.7%, #2687ea 3.7%, #3584e8 6.1%, #4b7fe3 11.9%, #4b80e3 12.2%, #4e7ee2 12.9%, #507ee1 13.9%, #6178db 20%, #6377db 20.4%, #6577da 21.7%, #6776d9 22.1%, #6f73d5 26.1%, #7571d4 28.2%, #7a6ed2 30.6%, #7c6dd1, #7b6dd1 31.2%, #7d6cd0 31.6%, #806bce 33.6%, #9561c5 43.8%, #9e5dc1 49.3%, #a05cc0 49.6%, #a956bb 55.1%, #b550b5 61.9%, #bd4cb1 66.3%, #c249ae 69.7%, #c24aad 70%, #c348ad 70.4%, #c349ad 71.4%, #c547ac 71.4%, #c746ab 73.4%, #c845aa 73.4%, #c845aa 74.1%, #ca44a9 74.1%, #d53ea3 82.3%, #d73da2 82.3%, #d73da2 83.3%, #d83ca1 83.3%, #ea3197 95.5%, #eb3096 95.5%, #f12b92);
	box-shadow: 0 7px 15px rgba(0, 9, 128, 0.05), 0 12px 28px rgba(0, 9, 128, 0.075);
	overflow: hidden;
`

App.propTypes = propTypes

export default App