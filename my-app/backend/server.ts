import {} from 'dotenv/config';
import express, {Response, Request} from 'express';
import mongoose from "mongoose";

const app = express();
let PORT = 3000;

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

app.get('/api/health', (_req: Request, res: Response) => {
    res.status(200).send("OK!");
})

try {
    app.listen(PORT, () => {
        console.log("Server listening on Port", PORT);
    })
} catch(e: any) {
    console.log("There was an error: ", e.message);
}