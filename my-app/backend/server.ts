import express, {Response, Request} from 'express';

const app = express();
let PORT = 3000;

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