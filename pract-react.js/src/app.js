import Form from "./Form";

const movies = [
  {
    name: "Avengers",
    available: 5,
  },
]

export default function App() {
  return (
    <div>
        <h2>Películas</h2>
        {movies.map(movie => (
          <form movie = {movie} />
        ))}
    </div>
  );
}
