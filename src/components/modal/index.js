import React, { useState, useEffect } from "react";
import { Modal, TextField, Button, Grid, FormControl } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalWindow = ({ handleCreateButton, handleUpdateButton, item }) => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    Title: "",
    Year: "",
    Director: "",
  });

  useEffect(() => {
    if (item && handleUpdateButton) {
      setValues({
        Title: item["Title"],
        Year: item["Year"],
        Director: item["Director"],
        _id: item["_id"],
      });
    } else {
      setValues({
        Title: "",
        Year: "",
        Director: "",
      });
    }
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (handleCreateButton) handleCreateButton(values);
    else handleUpdateButton(values);
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>
        {handleCreateButton ? "Add New Movie" : "Update Movie"}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FormControl sx={style}>
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Title"
                value={values["Title"]}
                name="Title"
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                //   ref={inputRef}
                id="outlined-required"
                label="Year(numbers only)"
                value={values["Year"]}
                name="Year"
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                //   ref={inputRef}
                id="outlined-required"
                label="Director"
                name="Director"
                value={values["Director"]}
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item>
              <Button
                onClick={(e) => handleClick(e)}
                onChange={(e) => handleChange(e)}
              >
                {handleCreateButton ? "create" : "update"}
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Modal>
    </>
  );
};

export default ModalWindow;
