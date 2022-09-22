import React, { useEffect, useContext } from "react";
import MovieCard from "../movieCard";
import ModalWindow from "../modal";
import { MovieService } from "../../api/services/movieService";
import MovieContext from "../../store/movieContext";
import {
  Grid,
  Paper,
  TableCell,
  Table,
  TableRow,
  TableContainer,
  TableHead,
} from "@mui/material";

const MoviePage = () => {
  const { data, setData } = useContext(MovieContext);

  useEffect(() => {
    MovieService.getAllMovies().then((res) => setData(res));
  }, []);

  const deleteMovie = (_id) => {
    MovieService.deleteMovie(_id).then(() =>
      MovieService.getAllMovies().then((res) => setData(res))
    );
  };

  const handleCreateButton = (movieData) => {
    MovieService.addNewMovie(movieData).then(() =>
      MovieService.getAllMovies().then((res) => setData(res))
    );
  };

  const handleUpdateButton = (movieData) => {
    MovieService.updateMovie(movieData).then(() =>
      MovieService.getAllMovies().then((res) => setData(res))
    );
  };

  return (
    <>
      <Grid>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Year</TableCell>
                <TableCell align="right">Dirrector</TableCell>
                <TableCell align="right">
                  <ModalWindow handleCreateButton={handleCreateButton} />
                </TableCell>
              </TableRow>
            </TableHead>
            <MovieCard
              Movies={data}
              deleteMovie={deleteMovie}
              handleUpdateButton={handleUpdateButton}
            />
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default MoviePage;
