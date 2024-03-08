var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.DB);

// Movie schema
const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    releaseDate: {type: String, required: true},
    genre: {
      type: String,
      enum: [
        'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Western', 'Science Fiction'
      ],
      required: true
    },
    actors: [{
      actorName: {type: String, required: true},
      characterName: {type: String, required: true},
    }],
  });  
  
  // const Movie = mongoose.model('Movie', MovieSchema);

  // const movies = [
  //   {
  //     title: 'Mad Max: Fury Road',
  //     releaseDate: "2015",
  //     genre: 'Action',
  //     actors: [
  //       { actorName: 'Tom Hardy', characterName: 'Max Rockatansky' },
  //       { actorName: 'Charlize Theron', characterName: 'Imperator Furiosa' },
  //     ],
  //   },
  //   {
  //     title: 'The Lord of the Rings: The Fellowship of the Ring',
  //     releaseDate: "2001",
  //     genre: 'Adventure',
  //     actors: [
  //       { actorName: 'Elijah Wood', characterName: 'Frodo Baggins' },
  //       { actorName: 'Ian McKellen', characterName: 'Gandalf' },
  //     ],
  //   },
  //   {
  //     title: 'Superbad',
  //     releaseDate: "2007",
  //     genre: 'Comedy',
  //     actors: [
  //       { actorName: 'Jonah Hill', characterName: 'Seth' },
  //       { actorName: 'Michael Cera', characterName: 'Evan' },
  //     ],
  //   },
  //   {
  //     title: 'The Shawshank Redemption',
  //     releaseDate: "1994",
  //     genre: 'Drama',
  //     actors: [
  //       { actorName: 'Tim Robbins', characterName: 'Andy Dufresne' },
  //       { actorName: 'Morgan Freeman', characterName: 'Ellis Boyd "Red" Redding' },
  //     ],
  //   },
  //   {
  //     title: 'Blade Runner 2049',
  //     releaseDate: "2017",
  //     genre: 'Science Fiction',
  //     actors: [
  //       { actorName: 'Ryan Gosling', characterName: 'Officer K' },
  //       { actorName: 'Harrison Ford', characterName: 'Rick Deckard' },
  //     ],
  //   },
  // ];
  
  // movies.forEach(movieData => {
  //   const movie = new Movie(movieData);
  //   movie.save()
  //     .then(() => console.log(`Saved ${movie.title}`))
  //     .catch(err => console.error(`Error saving ${movie.title}`, err));
  // });

// return the model
module.exports = mongoose.model('Movie', MovieSchema);