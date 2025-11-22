const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;


const uri = "mongodb+srv://smartdbUser:gGUMgmUI8spEEBri@cluster0.7jbyxlk.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Smart Server is running');
})




async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    //connecting insert
    const db = client.db('smart_db');
    const productsCollection = db.collection('products');
    const bidsCollection = db.collection("bids");

    app.get("/products", async (req, res) => {
        // const cursor = productsCollection.find().sort({price_min: -1}).limit(2).project({_id: 0, title: 1});
        console.log(req.query);

        const email = req.query.email;
        const query = {};
        if(email){
          query.email = email;
        }
        const cursor = productsCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
    });

    app.get("/products/:id", async(req, res) =>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await productsCollection.findOne(query);
        res.send(result);
    })

    app.post('/products', async (req, res) => {
        const newProduct = req.body;
        const result = await productsCollection.insertOne(newProduct);
        res.send(result);
    })

    app.patch("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const updatedProduct = req.body;
      const update = {
        $set: {
          name: updatedProduct.name,
          price: updatedProduct.price,
        }
      }
      const result = await productsCollection.updateOne(query, update);
      res.send(result);
    })

    app.delete('/products/:id', (req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = productsCollection.deleteOne(query);
        res.send(result);
    })

    //bids collection api
    app.get('/bids', async(req, res) => {
      const email = req.query.email;
      const query = {};
      if(email){
        query.buyer_email = email;
      }
      const carsor = bidsCollection.find(query);
      const result = await carsor.toArray();
      res.send(result);
    })

    app.post('/bids', async(req, res) => {
      const bid = req.body;
      const result = await bidsCollection.insertOne(bid);
      res.send(result);
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Smart Server is running on port ${port}`);
});


// connect kore listen kora
// client.connect()
// .then(()=>
//     app.listen(port, () => {
//     console.log(`Smart Server is running now on port ${port}`);
// })
// )
// .catch(console.dir)