import "./App.css";
import MoviePage from "./components/moviePage";
import { MovieProvider } from "./store/movieContext";
function App() {
  return (
    <MovieProvider>
      <MoviePage />
    </MovieProvider>
  );
}

export default App;
