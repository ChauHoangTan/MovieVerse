# MovieVerse
![screencapture-chauhoangtan-github-io-MovieVerse-2023-09-12-16_09_56](https://github.com/ChauHoangTan/MovieVerse/assets/118994379/141647b6-c7fb-4f3a-bed8-7eeb015f6d7f)

**Live Demo Code(Deployed FE, BE, DB) : *https://chauhoangtan.github.io/MovieVerse/***

##
**MovieVerse is a website that allows users to view detailed information about movies, actors...**
* **API** build with NodeJS, ExpressJS, Sequelize(MongoDB), Axios and JWT Auth
* **WEB APP** build with ReactJs(React Hooks), Redux, ES6, Jsx, Scss, Javascripts...
* Use [The MovieDB API](https://developer.themoviedb.org/docs) to get data films, actors...

## Feature
* **Search:** Users can search by title...
* **Browse:** Users can browse a catalog of movies, organized by genre, release date, or popularity.
* **Watch details films:** User can watch details of films like descriptions, trailer, image, relative films...
* **Ratings and Reviews:** User can ratings and reviews films
* **User account:** Users can create accounts, log in, and manage their profiles, their films such as liked, rated...
* **Upload file:** Users can upload avatar and background, server will store by Multer
* **Account Authentication:** Helps increase user security
* **Responsive web design:** Users can use the application using many devices such as computers, phones, and tablets...
* **Theme mode:** User can switch light mode and dark mode



## Setup and Running
* Prerequisites:
  * Node
  * MongoDB
* Clone repository: git clone https://github.com/ChauHoangTan/MovieVerse.git
* Configure:
  * movie_verse: at .env change REACT_APP_SERVER_URL_PREF correspond to the server url (Server have port 4000, url local: http://localhost:4000)
  * backend: at .env change MONGO_DB_URL correspond your MongoDb url
* Setup:
  * cd movie_verse: npm install
  * cd Backend: npm install
* Running
  * cd movie_verse: npm start
  * cd Backend: node index 
