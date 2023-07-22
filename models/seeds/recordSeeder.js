const db = require('../../config/mongoose')
const Record = require('../record')
const Category = require('../category')
const recordList = require('./record.json')

db.once('open', async () => {
  try {
    for (const recordData of recordList) {
      const category = await Category.findOne({ name: recordData.category }).lean()
      recordData.categoryId = category._id
      await Record.create(recordData)
    }
    console.log('Record seeder done!')
    process.exit()
  }
  catch (error) {
    console.log(error)
  }
})