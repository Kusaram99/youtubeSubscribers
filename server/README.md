This projects summary link:- https://docs.google.com/document/d/1jZJ95RB40wc2iEQdxp8rGA6y9UpcO7glIN_gnbdLkHs/edit


This project is about youtube subscribers

In this project we have used express.js , node.js technology for make a youtube subscribers database
as well as there is all ready builded subscribers data into the data.js and first of all we need run the createData.js because we are storing data in data base via createData.js and then we used all api request into the app.js, then model forlder is made for Schema of that database , In last index.js it runs on server port "http://localhost:3000", so we only need to get data,
Thats why we can get data from data base using the GET Request.
So If we want all subscribers data then we can send request on that url:- http://localhost:3000/subscribers
as well as if only want subscribers name then we can use this url:- http://localhost:3000/subscribers/names
and we can get data via users Id , url is “http://localhost:3000/subscribers/:id”
