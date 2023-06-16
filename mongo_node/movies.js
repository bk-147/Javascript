const express = require('express')
const router = express.Router()
// import "./db.mjs"
const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb://127.0.0.1:27017/");

//connecting to mongodb server
async function connectDB() {
    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    }

}

connectDB().catch(console.error)



//get all movies
router.get('/', async (req, res) => {
    const data = await client.db("myNewDatabase").collection("movies").find({}).toArray()
    res.json(data)
})

//get with id
router.get('/:id', async (req, res) => {

    const data = await client.db("myNewDatabase").collection("movies").find({ id: parseInt(req.params.id) }).toArray()
    res.json(data)
})

//insert 1 movie
router.post('/:id', async (req, res) => {
    const body = req.body;
    console.log(body);

    const result = await client.db("myNewDatabase").collection("movies").insertOne(body)
    res.json({ message: 'Movie added' });
})

//insert many movies
router.post('/insertMany', async (req, res) => {
    const body = req.body;
    console.log(body);

    const result = await client.db("myNewDatabase").collection("movies").insertMany(body)
    res.json({ message: 'Movies added' });
})

//update a movie
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const reqBody = req.body

    const result = await client.db("myNewDatabase").collection("movies").updateMany({ id: parseInt(id) }, { $set: reqBody })
    console.log(result)

    res.json({ message: `The book with id ${id} has been updated` })
})

//delete a movie
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const result = await client.db("myNewDatabase").collection("movies").deleteMany({ id: parseInt(id) })
    res.json({ message: `movie with id ${id} has been deleted` });
});




module.exports = router;