var express = require('express');
var router = express.Router();

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  genres: ["Action", "Sci-Fi", "Thriller"],
  rating: 8.8,
  cast: [
    {
      name: "Leonardo DiCaprio",
      role: "Cobb"
    },
    {
      name: "Joseph Gordon-Levitt",
      role: "Arthur"
    },
    {
      name: "Elliot Page",
      role: "Ariadne"
    }
  ],
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({movie})
});

module.exports = router;
