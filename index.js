import express  from "express";
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.listen(PORT,()=>console.log(`Server Running on port: http://localhost:${PORT}`))