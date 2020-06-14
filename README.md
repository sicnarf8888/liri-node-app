# liri-node-app
LIRI-Bot

Overview
Similar to SIRI, LIRI is a Language Interpretation and Recognition Interface using Node.js and the Command Line Interface to take user input, search one of 3 APIs and give back data based on the search criteria.

Usage
Fist start by cloning the repo into a director of your choice.
Run npm install in the command line to install all required dependencies.
Run 1 of the 4 commands listed below for each function of the application.

Command option 1 node liri.js concert-this + <Artist/Band Name here> This will search the Bands in Town Artist Events API and return data related to the desired artist or Band. 

![concert](https://user-images.githubusercontent.com/25557837/84585429-9bf5e480-adc4-11ea-86fd-1c8a9b739b7d.PNG)


Command option 2 node liri.js spotify-this-song + <song name here> This will search the Spotify API and return data related to the desired song. 

Command option 3 node liri.js movie-this + <movie name here> This will search the OMDB API and return data related to the desired movie. 

Command option 4 node liri.js do-what-it-says This will take the text inside of the random.txt file and use it to call one of the Liri commands.

Technologies
Node.js
npm axios
npm inquirer
npm dotenv

APIs
Bandsintown
OMDB
Spotify
