import React, { useEffect, useState } from "react";
import { TableCell, TableRow, TableBody, Button } from "@mui/material";
import ModalWindow from "../modal";

const MovieCard = ({ Movies, deleteMovie, handleUpdateButton }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      Movies.map(({ _id, Title, Year, Director }) => {
        return { _id, Title, Year, Director };
      })
    );
  }, [Movies]);

  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row._id}>
          <TableCell>{row._id}</TableCell>
          <TableCell align="right">{row.Title}</TableCell>
          <TableCell align="right">{row.Year}</TableCell>
          <TableCell align="right">{row.Director}</TableCell>
          <TableCell align="right">
            <Button color="secondary" onClick={() => deleteMovie(row._id)}>
              Delete
            </Button>
            <ModalWindow
              handleUpdateButton={handleUpdateButton}
              item={row}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default MovieCard;
