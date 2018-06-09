import React, { Component } from 'react'

import PayMethods from './PayMethods'
import Form from './Form'
import Success from './Success'
import Loader from './Loader'
import config from '../config'

export default class PaymentContainer extends Component {

	constructor(props) {
		super(props)

		this.state = {
			step: 0,
			methods: [],
			activeMethod: null,
			country_code: '',
			loading: true,
		}
	}

	handleNextStep = () => {
		this.setState({ step: this.state.step + 1 })
	}

	handlePrevStep = () => {
		this.setState({ step: this.state.step - 1 })
	}
	
	handleChooseMethod = id => {
		const activeMethod = this.state.methods
			.find(method => method.id === id)

		this.setState({ activeMethod })
		this.handleNextStep()
	}

	handleChangeCountry = e => {
		const value = e.target.value

		this.setState({ country_code: value, loading: true }, this.requestMethods)
	}

	handleSubmit = () => {
		// call payment service api
		
		// then get user back to website
		this.handleNextStep()
	}

	handlePaymentFinished = () => {
		this.props.onSuccess()
	}

	requestMethods = async () => {
		const { country_code } = this.state

		const res = await fetch(`https://api.paymentwall.com/api/payment-systems/?key=${config.API_KEY}&sign_version=2${country_code ? `&country_code=${country_code}` : ''}`)
		const methods = await res.json()

		this.setState({ loading: false, methods: methods || [] })
	}

	componentDidMount = () => {
		this.requestMethods()
	}

	render() {
		const { loading, step, methods, activeMethod, country_code } = this.state

		if (loading) {
			return <Loader />
		}

		switch (step) {
			case 0:
				return <PayMethods
					methods={this.state.methods}
					onChoose={this.handleChooseMethod}
					onChangeCountry={this.handleChangeCountry}
					activeCountry={country_code}
				/>
			case 1:
				return <Form
					onSubmit={this.handleSubmit}
					onBack={this.handlePrevStep}
					method={activeMethod}
					price={this.props.config}
				/>
			case 2:
				return <Success
					onFinish={this.handlePaymentFinished}
				/>

			default: return <div>something went wrong</div>
		}
	}
}