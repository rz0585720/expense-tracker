const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/', (req, res) => {
	Category.find()
		.lean()
		.then(categories => {
			Record.find()
				.populate('categoryId')
				.lean()
				.sort({ date: 'desc' })
				.then(records => {
					let totalAmount = 0
					records.forEach(record => {
						totalAmount += record.amount
						record.date = record.date.toISOString().slice(0, 10)
					})
					res.render('index', { categories, records, totalAmount })
				})
				.catch(error => console.log(error))
		})
})

router.get('/search', (req, res) => {
	const categoryId = req.query.category
	let totalAmount = 0

	if (!categoryId) {
		return res.redirect('/')
	}

	Category.find()
		.lean()
		.then(categories => {
			categories.forEach(category => {
				if (category._id.toString() === categoryId) {
					category.selected = true
				} else {
					category.selected = false
				}
			})
			Record.find({ categoryId })
				.populate('categoryId')
				.lean()
				.sort({ date: 'desc' })
				.then(records => {
					records.forEach(record => {
						totalAmount += record.amount
					})
					res.render('index', { categories, records, totalAmount })
				})
				.catch(error => console.log(error))
		})
})

module.exports = router
