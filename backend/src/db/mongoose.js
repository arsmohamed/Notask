const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb+srv://mero:AmAm1234@notask.ydi4i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://127.0.0.1:27017/notask-Test', {
    useNewUrlParser: true,
    useCreateIndex: true
})
