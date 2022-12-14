const express = require('express');

const app = express();
let PORT = 3000;

app.get('/api/health', (req, res) => {
    res.status(200).send("ok");
})

try {
    app.listen(PORT, () => {
        console.log("Server listening on Port", PORT);
    })
} catch(e) {
    console.log("There was an error: ", e.message);
}