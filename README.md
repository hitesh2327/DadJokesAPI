# DadJokesAPI

change directory to DadJokesAPI

run command = "npm install"
then run command "npm start"




##DB QUERY

create databse dad_jokes;
create SCHEMA dad_jokes;
CREATE TABLE dad_jokes.favorites (
    id SERIAL PRIMARY KEY,
    jokeId TEXT NOT NULL
);