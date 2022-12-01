const mongoose = require('mongoose')
const SubscriberModel = require('./models/subscribers')
const data = require('./data')

// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://ramm_1_99:ramm_1_99@subscriber.xawpniz.mongodb.net/youtube?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
// console.log(db);
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await SubscriberModel.deleteMany({})
    // console.log(connection)
    await SubscriberModel.insertMany(data) 
    await mongoose.disconnect();
}
refreshAll()