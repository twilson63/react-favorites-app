# React 5-n-1 Practice

Create five Favorites App:

* Movies
* Songs
* Cats
* Dogs
* Youtube

In this practice project, you will create 5 react apps in one app. Each app is a different domain: movies, songs, cats, dogs, and youtube. The purpose of each app, is to create a list of favories of each domain subject. For example, create a list of your favorite movies, create a list of your favorite songs, create a list of your favorite cats, etc.

## Challenge 1

Step through each domain and create the following features:

- List your favorites
- Add a new favorite
- Show your favorite details
- Edit you favorite data
- Delete your favorite model

Make all of the inputs manual for each domain.

## Challenge 2

Enhance the ability to add your favorites using lookup apis:

- movie api - http://www.omdbapi.com/
- music api - https://developer.spotify.com/documentation/web-api/
- cats api - https://thecatapi.com/
- dogs api - https://dog.ceo/
- youtube api - https://developers.google.com/youtube/v3/

> Access to these api's should be free

With your access key, create a way to search for the domain, then use the selection to fill in the data for the favorite record. For example, if you allow the user to search for a movie then take the selection and pull the movie rating, genre, year to complete the favorite record.

## Challenge 3

Authentication - Using Auth0 to create authentication for the application, and add a user attribute for each favorite, then modify the app to only show the favorites of the logged in user. This way each user can manage their own favorites.

## Challenge 4

Add the ability for others to vote up or down for each item on the list.

## Challenge 5

Add pagination to the list pages, so if there is more than 10 it should show on another page. Then sort the data based on votes.

## Developer Setup

```
npm install
npm start
```

Open the src folder in an editor and start coding.

## About 

This project uses the json-server to provide a basic rest server for building state based applications. The `run-p` command should run both the api and app. It will run the api on port `3000` and app on port `1234` by default.
