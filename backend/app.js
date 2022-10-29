const express = require('express')
const {MongoClient} = require("mongodb");
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const mongoDBURI = process.env.MONGODB_URI

class MongoConnection {
    static db
    static async connect(uri) {
        MongoConnection.db = (await MongoClient.connect(uri)).db()
    }
}
app.use(bodyParser.json());
app.use(cors())

app.get('/', async (req, res) => {
    try {
        const database = MongoConnection.db;
        const collection = database.collection('text');
        const textObj = await collection.findOne({})
        res.json({text: textObj?.text})
    } catch (e) {
        console.error(`Error: ${e.stack}`)
        res.status(500)
        res.json({})
    }

})


app.put('/', async (req, res) => {
    try {
        const text = req.body.text
        const updateText = {
            $set: {
                text: text
            },
        };
        const database = MongoConnection.db;
        database.collection('text').updateOne({}, updateText, {upsert: true});
        res.json({success: true})
    } catch (e) {
        console.error(`Error: ${e.stack}`)
        res.status(500)
        res.json({})
    }
})

async function start() {
    await MongoConnection.connect(mongoDBURI)
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
}

start()
