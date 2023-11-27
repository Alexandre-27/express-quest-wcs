const express = require("express");

const app = express();

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to my favourite movie list");
});

app.get("/wilders/remerciement", (req, res) => {
  res
    .status(200)
    .send("Merci wilders d'avoir prit sur votre temps pour me corriger :)");
});

app.get("/wilders/encouragement", (req, res) => {
  res
    .status(200)
    .send(
      "Courage à vous wilders. Je sais que ça peut-être dur parfois mais si vous regardez derrière vous vous rendrez compte du chemin parcouru et de la progression que vous avez eux. Vous savez au minimum monter un site, vous comprenez le JS Vanilla et vous adorez React ainsi que le CSS alors qu'au début que saviez vous faire ?"
    );
});

app.get("/api/movies", (req, res) => {
  const api = movies;
  res.status(200).json(api);
});

app.get("/api/movies/:id", (req, res) => {
  const id = movies.find((m) => m.id === parseInt(req.params.id));
  if (!id) {
    res.status(404).send("Not Found");
  } else {
    res.json(id);
  }
});

module.exports = app;
