const db = require('../../config/mongoose')
const Category = require('../category')
const categoryList = require('./category.json')

db.once('open', async () => {
	try{
    for (const categoryData of categoryList) {
      const existCategory = await Category.findOne({ name: categoryData.name }).lean()
      if (existCategory) {
        console.log(`Category ${existCategory.name} already exist.`)
      }
      else {
        await Category.create(categoryData)
        console.log(`Category ${categoryData.name} created!`)
      }
    }
    process.exit()
  }
  catch(error){
    console.log(error)
  }
})
