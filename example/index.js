
function openWidget(amount, currency) {

	PaymentWidget
		.init({ amount, currency }, 'widget')
		.then(res => {
			document.getElementById('status').innerText = 'Status: paid'
			res.destroy()
		})

}

document.getElementById('form').addEventListener('submit', e => {
	e.preventDefault()

	const amount = +document.getElementById('amount').value
	const currency = document.getElementById('currency').value

	if (amount > 0 && currency) {
		openWidget(amount, currency)
	}
})