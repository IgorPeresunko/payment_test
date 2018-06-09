# Paymentwall Widget

## Demo

You can see demo at [here](http://igorperesunko.com/terminal3).

## How to use

1. Add widget.js to your project
```html
<script type="text/javascript" src="widget.js"></script>
```

2. Just call next line with proper data and it will open the widget: `PaymentWidget.init({ amount, currency }, roodId)`

```javascript
PaymentWidget
	.init({ amount, currency }, 'widget')
```

3. `init` method returns the promise which will fire after user complete payment

```javascript
PaymentWidget
	.init({ amount, currency }, 'widget')
	.then(res => res.destroy())
```

## How to dev

1. Install dependencies
```bash
yarn install
```

2. Start development server
```bash
yarn start
```

## Build

```bash
yarn build
```