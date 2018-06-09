import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

export const init = (config, rootId) => {
	return new Promise((resolve, reject) => {	

		const onSuccess = () => {
			resolve({
				destroy: () => ReactDOM
					.unmountComponentAtNode(document.getElementById(rootId))
			})
		}
	
		ReactDOM.render(
			<App config={config} onSuccess={onSuccess} />,
			document.getElementById(rootId)
		)

	})
}

init({ amount: 119.99, currency: 'USD' }, 'widget').then(res => res.destroy())