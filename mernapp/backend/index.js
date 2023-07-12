const express = require('express')
const cors = require('cors')
const app = express()
const port = 5009
const mongoDB=require("./db")
mongoDB();

app.use(cors({ origin: 'http://localhost:3003' }));

app.use(express.json())
app.use('/api',require("./Routes/CreatUser"));
app.use('/api',require("./Routes/DisplayData"));
app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});