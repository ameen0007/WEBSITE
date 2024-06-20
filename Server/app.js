const express=require('express');
const connectDB = require('./config/db')
const cors = require('cors');
const serviceRouter=require('./routes/serviceRoute');
connectDB();
const app = express();
app.use(cors({
  credentials:true
}));
app.use(express.json())
app.use('/services', serviceRouter);



const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});