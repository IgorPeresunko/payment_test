import React, { Component } from 'react'
import styled from 'styled-components'

import Form from './Form'

export default class FormContainer extends Component {

	state = {
		inputs: [
			{
				label: 'Name on Card',
				placeholder: 'DAN ABRAMOV',
				name: 'name',
				length: 40,
				width: 100,
				value: '',
				error: '',
				validate: input => input.replace(/[0-9]/g, "").toUpperCase(),
				isValid: input => input.length > 0 ? '' : 'Is required'
			}, {
				label: 'Credit Card Number',
				placeholder: '1234 5678 9083 1234',
				name: 'number',
				length: 19,
				width: 100,
				value: '',
				error: '',
				validate: input => {
					if (input.length <= 19) {
						return input.replace(/\D/g, "").replace(/(.{4})/gi, (value, _, i, str) => {
							return str.length - i === 4 ? value : value + ' '
						})
					}
					return input
				},
				isValid: input => {
					if (input.length !== 19)
						return 'Card number format is wrong'

					const arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
					const num = input.replace(/\D/g, "")

					// luhn check
					let len = num.length, bit = 1, sum = 0, val
					
					while (len) {
						val = parseInt(num.charAt(--len), 10)
						sum += (bit ^= 1) ? arr[val] : val
					}
			
					if (sum && sum % 10 !== 0)
						return 'Card number is not valid with Luhn format'

					return ''
				}
			}, {
				label: 'Expiration Date',
				placeholder: '12/19',
				name: 'expiration',
				length: 5,
				width: 70,
				value: '',
				error: '',
				validate: input => input.replace(/[^0-9]/g, "").replace(/(.{2})/, (value, _, i, str) => {
					return str.length - i === 2 ? value : value + '/'
				}),
				isValid: input => {
					if (input.length === 0)
						return 'Is required'
					if (input.indexOf('/') < 0)
						return 'Date format is wrong'

					const month = Number(input.split('/')[0])
					const year = Number(input.split('/')[1])
					const date = new Date()
					const cur_year = (1900 + date.getYear()) % 100
					const cur_month = date.getMonth() + 1

					if (month > 12 || month === 0)
						return 'Wrong date'

					if (cur_year > year || (cur_year === year && cur_month > month) ) {
						return 'Your card expired.'
					}				

					return ''
				}
			}, {
				label: 'CVV',
				placeholder: '321',
				name: 'cvv',
				length: 3,
				width: 30,
				value: '',
				error: '',
				validate: input => input.replace(/[^0-9]/g, ""),
				isValid: input => {
					if (input.length !== 3)
						return 'CVV format is wrong'
					if (input === '123')
						return 'CVV can\'t be 123'
					
					return ''
				}
			}
		]
	}

	handleSubmit = e => {
		const { inputs } = this.state

		const newInputs = inputs
			.map(inp => ({ ...inp, error: inp.isValid(inp.value) }))
		
		const errors = newInputs.map(inp => inp.error)

		if (errors.every(err => err === '')) {
			this.props.onSubmit()
		}

		this.setState({ inputs: newInputs })
	}

	handleInput = e => {
		const name = e.target.name
		const value = e.target.value

		const setNewValue = inp =>
			inp.name === name ? { ...inp, value: inp.validate(value) } : inp


		this.setState(prevState => ({
			inputs: prevState.inputs.map(setNewValue)
		}))
	}

	render() {
		const { inputs } = this.state
		return (
			<Form
				onSubmit={this.handleSubmit}
				onBack={this.props.onBack}
				onInput={this.handleInput}
				inputs={inputs}
				method={this.props.method.name}
				price={this.props.price}
			/>
		)
	}
}