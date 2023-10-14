import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5000;
import connection from "./connection/config.js";
import userRoutes from "./routes/user.routes.js";
import { createUser } from "./controller/user.controller.js";
import bodyParser from "body-parser";
connection();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors({
    origin: '*'
}));
// userRoutes(app);
app.post('/create/user',createUser);
app.listen(port, () => {
    console.log(`The Server is runing on port http://localhost:${port}`);
});