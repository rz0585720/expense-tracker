const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const db = require('../../config/mongoose')
const Record = require('../record')
const Category = require('../category')
const User = require('../user')
const { users, records } = require('../../data')

db.once('open', async () => {
	try {
		await Promise.all(
			users.map(async (user, user_index) => {
				const salt = await bcrypt.genSalt(10)
				const hash = await bcrypt.hash(user.password, salt)
				const createUser = await User.create({
					name: user.name,
					email: user.email,
					password: hash,
				})
				console.log('User created')

				const userRecords = []
				for (let i = 0; i < records.length; i++) {
          const categoryObj = await Category.findOne({ name: records[i].category }).lean()
					if (
						i >= 3 * user_index &&
						i < 3 * (user_index + 1)
					) {
            records[i].categoryId = categoryObj._id
						records[i].userId = createUser._id
						userRecords.push(records[i])
					}
				}
				await Record.create(userRecords)
				console.log('All users and records are created')
        process.exit()
			})
		)
	} catch (error) {
		console.log(error)
	}
})