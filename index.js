const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Load movie data from movies.json
const movies = JSON.parse(fs.readFileSync('movies.json', 'utf-8'));

// Routes
app.get('/', (req, res) => {
  res.send("🎬 Welcome to Suyog's Movie API!");
});

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.get('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find(m => m.id === id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: "Movie not found" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
