const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('passport')
const bcrypt = require('bcryptjs')

router.get('/login', (req, res) => {
	res.render('login')
})

router.post(
	'/login',
	(req, res, next) => {
		const { email, password } = req.body
		if (!email || !password) {
			req.flash('warning_msg', '請先登入才能使用！')
			return res.redirect('/users/login')
		}
		next()
	},
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/users/login',
	})
)

router.get('/register', (req, res) => {
	res.render('register')
})

router.post('/register', (req, res) => {
	const { name, email, password, confirmPassword } = req.body
	const errors = []

	if (!email || !password || !confirmPassword) {
		errors.push({ message: '所有欄位皆為必填。' })
	}

	if (password !== confirmPassword) {
		errors.push({ message: '密碼與確認密碼不相符。' })
	}
	if (errors.length) {
		return res.render('register', {
			errors,
			name,
			email,
			password,
			confirmPassword,
		})
	}

	User.findOne({ email })
		.then(user => {
			if (user) {
				console.log('User already exists.')
				res.render('register', {
					name,
					email,
					password,
					confirmPassword,
				})
			}
      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(password, salt))
        .then(hash => User.create({ name, email, password: hash }))
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))			
		})
})

router.get('/logout', (req, res) => {
	req.logout()
	req.flash('success_msg', '你已經成功登出。')
	res.redirect('/users/login')
})

module.exports = router
