require('dotenv').config();
var express = require('express');
var router = express.Router();
var cors = require('cors');

const products = [
	{
		name: 'orange Juice',
		category: 'Drinks',
		price: 14.99,
	},
	{
		name: 'Apples',
		category: 'fruits',
		price: 4.99,
	},
	{
		name: 'Tomatos',
		category: 'vegetables',
		price: 6.39,
	},
	{
		name: 'Coffee',
		category: 'Drinks',
		price: 3.15,
	},
	{
		name: 'Sweet Paper',
		category: 'Vegetables',
		price: 12.15,
	},
	{
		name: 'Grapes',
		category: 'FRUITS',
		price: 20.49,
	},
	{
		name: 'Pears',
		category: 'Fruits',
		price: 1.35,
	},
	{
		name: 'Team',
		category: 'Drinks',
		price: 0.4,
	},
];

router.post('/send', (req, res) => {
	try {
		let name = req.body.Name;
		let number = req.body.Number;
		var content = `From contact form: \nname: ${name} \nnumber: ${number}`;
		console.log(content);
	} catch (error) {
		console.log(error);
		return res.status(500).send('Server error');
	}
});

router.get('/', async (req, res) => {
	try {
		res.json(products);
	} catch (error) {
		console.log(error);
		return res.status(500).send('Server error');
	}
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3002);
