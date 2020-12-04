// Modules
const express = require('express');
const path = require('path');

// Other variables
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (app.use statements)

// Requests
app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));