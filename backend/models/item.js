const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  title: String,
  price: Number,
  quantity: Number,
  completed: Boolean,
})

itemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Item', itemSchema)