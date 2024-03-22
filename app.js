
const express = require('express');
const app = express();

// Step 4: Set up routes for each page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/public/signup.html');
});

app.get('/game', (req, res) => {
    res.sendFile(__dirname + '/public/game.html');
});

// Step 5: Serve static files for each page
app.use(express.static('public'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));