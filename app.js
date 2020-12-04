// Modules
const express = require('express');
const path = require('path');

// Other variables
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (app.use statements)
app.use(express.static(path.join(__dirname, "public")));

// Requests


app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));