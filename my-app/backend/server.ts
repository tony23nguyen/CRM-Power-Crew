import express, {Response, Request} from 'express';
import mongoose from "mongoose";
import * as dotenv from 'dotenv' 
import {} from 'dotenv/config'

import contactRoutes from './routes/Contact' 
import dealRoutes from './routes/Deal'
import leadRoutes from './routes/Lead'
import authRoutes from './routes/Auth'

dotenv.config()
const app = express();
let PORT = 3000;

mongoose.connect(`${process.env.DATABASE_URL}`)
// const db = mongoose.connection;
    .then(() => {
        console.log('connected to database')
    })
    .catch((error) => {
        console.log(error)
    })

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/health', (_req: Request, res: Response) => {
    res.status(200).send("OK!");
})

app.use("/auth", authRoutes); //routes
app.use("/leads", leadRoutes);
app.use("/deals", dealRoutes);
app.use("/contacts", contactRoutes);

try {
    app.listen(PORT, () => {
        console.log("Server listening on Port", PORT);
    })
} catch(e: any) {
    console.log("There was an error: ", e.message);
}