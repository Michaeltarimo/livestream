const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path'); // Import the path module

const port = process.env.PORT || 3009; // Use the port provided by the environment or default to 3009

const app = express();
app.use(cors({ origin: 'http://localhost:3009' }));

// Define routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html')); // Use path.join to construct the file path
});

app.get('/agents', function(req, res) {
    res.sendFile(path.join(__dirname, 'index-agents.html')); // Use path.join to construct the file path
});

const server = http.createServer(app);

server.listen(port, () => console.log(`Server started on port localhost:${port}`));
