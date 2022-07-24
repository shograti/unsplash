const mongoose = require('mongoose')

module.exports = mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('DB Connection successful')
})
.catch((err) => {
    console.log(err)
})