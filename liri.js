//required installations

require("dotenv").config();
//Add the code required to import the keys.js file and store it in a variable.

var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var moment = require('moment'); // require

var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});

// Take two arguments.

var action = process.argv[2];
var value = process.argv[3];

// We will then create a switch-case statement (if-else would also work).
// The switch-case will direct which function gets run.
switch (action) {
case "concert-this":
  getBandsEvents(value);
  break;

case "spotify-this-song":
  getSong(value);
  break;

case "movie-this":
  getMovie(value);
  break;

case "do-what-it-says":
  doWhatItSays();
  break;
}


// This will search the Bands in Town Artist Events
function getBandsEvents(artists){
    // Then run a request with axios to the OMDB API with the movie specified
axios.get(`https://rest.bandsintown.com/artists/${artists}/events?app_id=codingbootcamp`).then(
    function(response) {
      console.log("");
      console.log("===================== Event Information =====================");
      console.log("");
      console.log("Name of the venue : " + response.data[0].venue.name);
      console.log("Venue location : " + response.data[0].venue.location);

      var eventDate = moment(response.data[0].datetime).format('MMMM Do YYYY, h:mm:ss a');
      console.log("Date of the Event  : " + eventDate);
      console.log("");
      console.log("===============================================================");
      console.log("");
    })
    .catch(function(error) {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    
  });
    
};


// This will show information about the song 
function getSong(userSearch){

// If no song is provided then program will run default to "The Sign" by Ace of Base
  if (userSearch === undefined) {
    userSearch = `"The Sign" Ace of Base`;
    console.log("");
    console.log("-------------------- Check this song out !! -------------------- ");
    
    
};

spotify
  .search({ type: 'track', query: userSearch  })
  .then(function(data) {
      var result = data.tracks.items[0]

    console.log("");
    console.log("==================== Information of this song ======================");
    console.log("");
    console.log("Artist(s) : " , result.album.artists[0].name);
    console.log("Song Name : " , result.name);
    console.log("Preview : " , result.preview_url);
    console.log("Album Name : " , result.album.name);
    console.log("");
    console.log("===============================================================");
    console.log("");

  })
  .catch(function(error) {
      
    console.log("Error", error.message);
  
});

};

// This will output movie information
function getMovie(movieName){

//Response if user does not type in a movie title
if (movieName === undefined) {
  movieName = `Mr.Nobody`;
  console.log("");
  console.log("===================== Watch this =====================");
  console.log("");
  console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
  console.log("It's on Netflix!");
  
};
    
// Run a request with axios to the OMDB API with the movie specified
axios.get(`https://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=trilogy`).then(


    function(response) {
      console.log("");
      console.log("===================== Movie Information =====================");
      console.log("");
      console.log("Title of the movie : " + response.data.Title);
      console.log("Year the movie came out : " + response.data.Year);
      console.log("IMDB Rating of the movie : " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating of the movie : " + response.data.Ratings[1].Value);
      console.log("Country where the movie was produced : " + response.data.Country);
      console.log("Language of the movie : " + response.data.Language);
      console.log("Plot of the movie : " + response.data.Plot);
      console.log("Actor in the movie : " + response.data.Actors);
      console.log("");
      console.log("===============================================================");
      console.log("");
    })
    .catch(function(error) {
      
        console.log("Error", error.message);
      
    });

};



// Will run spotify-this-song for "I Want It That Way" as follows the text in random.txt
function doWhatItSays(){
  fs.readFile("random.txt", "utf8", function(error, data){
    if (error) {
      return console.log(error);
    }
    data = data.split(",");
    var song = data[1]
      getSong(song);
  });

};