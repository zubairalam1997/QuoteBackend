const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");


const app = express();
const port = 3006;
app.use(express.json());
app.use(cors());

const url = "mongodb://localhost:27017";
const dbName = "quotes";
const collectionName = "randomQuotes";
const randomQuote = require("./data/randomQuote");

app.get('/' , async (req , resp)=>{
    resp.send("Hello world");
    let quoteTexts = await randomQuote.find();
    resp.send({"quote":quoteTexts});
});

app.get("/home", async (req, resp) => {
    try {
      const client = new MongoClient(url, { useUnifiedTopology: true });
      await client.connect();
  
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
  
      const count = await collection.countDocuments();
      const randomNum = Math.floor(Math.random() * count);
  
      const quoteItem = await collection.findOne({}, { skip: randomNum });
  
      client.close();
  
      resp.send(quoteItem);
    } catch (err) {
      console.error(err);
      resp.status(500).send("Error retrieving data");
    }
  });
app.listen(port , ()=>{
    console.log(`Server is running on ${port}`);
})