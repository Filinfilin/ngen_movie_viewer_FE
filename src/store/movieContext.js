import { createContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [data, setData] = useState([]);
  const state = { data, setData };

  return (
    <MovieContext.Provider value={state}> {children}</MovieContext.Provider>
  );
}

export default MovieContext;
