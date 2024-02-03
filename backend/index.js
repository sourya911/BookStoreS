const express=require('express')
const app=express()

const cors=require("cors")

// Middleware
app.use(cors());

app.use(cors(
    {
        origin:["https://bookstore-sourabh.vercel.app"],
        methods:["POST","GET","PUT","PATCH","DELETE"],
        credentials: true
    }
    
));

mongodb+srv://book-store:drishti12345@cluster0.nfnw30m.mongodb.net/?retryWrites=true&w=majority
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello')
})


// mongodb configuration 


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://book-store:drishti12345@cluster0.nfnw30m.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // collection creation
    const booksCollection =client.db("BookInventory").collection("books");

    app.post('/upload',async(req,res)=>{
        const data=req.body;
        const result=await booksCollection.insertOne(data)
        res.send(result);
    })

    app.get('/books',async (req,res)=>{
        const books = booksCollection.find()
        const result = await books.toArray()
        res.send(result)
    })

    app.patch('/book/:id',async(req,res)=>{
        const id = req.params.id;
        const updateBook = req.body;
        const filter={_id:new ObjectId(id)}
        const options={upsert : true}

        const updateDoc = {
            $set:{
                ...updateBook
            }
        }
        // update

        const result = await booksCollection.updateOne(filter,updateDoc,options)
        res.send(result)
    })

    app.delete('/book/:id',async(req,res)=>{
        const id= req.params.id;
        const filter={_id:new ObjectId(id)}
        const result=await booksCollection.deleteOne(filter)
        res.send(result)
    })

    app.get('/all-books',async (req,res)=>{
      let query = {};
      if(req.query?.category){
        query={category:req.query.category}
      }

      const result= await booksCollection.find(query).toArray();
      res.send(result)
    })


    app.get('/book/:id',async (req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result = await booksCollection.findOne(filter)
      res.send(result)
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


app.listen(3000,()=>{
    console.log(3000)
})
