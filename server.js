// Import necessary modules
const express = require('express');
const path = require('path');

// Initialize Express app
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))


// Set up routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/db/db.json'));
});


app.post("/api/notes", (req, res) => {

  console.log("post request data",req.body);

  let newNote = req.body;

})

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
