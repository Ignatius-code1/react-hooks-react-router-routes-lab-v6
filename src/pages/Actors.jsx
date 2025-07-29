import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([
    {
      id: 1,
      name: "Benedict Cumberbatch",
      movies: ["Doctor Strange", "The Imitation Game", "Black Mass"]
    },
    {
      id: 2,
      name: "Justin Timberlake",
      movies: ["Trolls", "Friends with Benefits", "The Social Network"]
    },
    {
      id: 3,
      name: "Anna Kendrick",
      movies: ["Pitch Perfect", "Into The Wood"]
    },
    {
      id: 4,
      name: "Tom Cruise",
      movies: ["Jack Reacher: Never Go Back", "Mission Impossible 4", "War of the Worlds"]
    }
  ]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then(r => r.json())
      .then(data => setActors(data))
      .catch(err => console.error("Failed to fetch actors:", err));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map(actor => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies && actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
