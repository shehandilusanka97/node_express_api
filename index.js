import express from "express";
import bodyParser from "body-parser";
import usersRoutes from './routes/users.js'


const app = express();
const PORT = 4544;

app.use(bodyParser.json());


app.use('/users',usersRoutes);

app.get("/", (req, res) => res.send("Hellow fron Homepage")   );

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
å