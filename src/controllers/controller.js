import file from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fs = file.promises

const controller = (req, res) => {
    fs.readFile(__dirname, '/src/tamplete/index.html', 'utf-8', (err, data) => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(data);
    })
}

export default controller;