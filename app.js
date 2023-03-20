import express from 'express'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 5000;
//import router from './src/routes/route.js'

app.use(express.json());
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname,'./src/template')))

app.get('/', (req, res) => {
    res.sendFile(__dirname, './src/templete/index.html', (err, data) => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(data);
    })
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});