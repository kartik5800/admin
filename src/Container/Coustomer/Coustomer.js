import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

function Coustomer(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [Update, setUpdate] = useState();
  const [dopen, setDopen] = React.useState(false);
  const [did, setDid] = useState()


  const handleClickDopen = (id) => {
    setDopen(true);
    setDid(id);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setUpdate()

  };

  const handleClose = () => {
    setOpen(false);
    setUpdate()
    setDopen()
    formik.resetForm();
  };


  let Coustomer = {
    name: yup.string().required('enter coustomer name'),
    Admit_date: yup.string().required('please enter  admit date'),
    Decharge_date: yup.string().required('please enter dechage date'),
    Bill: yup.string().required('please enter total bill'),
  }


  let schema = yup.object().shape(Coustomer);

  const formik = useFormik({
    initialValues: {
      name: '',
      Admit_date: '',
      Decharge_date: '',
      Bill: ''
    },
    validationSchema: schema,
    onSubmit: (value, { resetForm }) => {
      if (Update) {
        handleupdate(value)
      } else {
        handleSubmitdata(value)
      }
      resetForm();
    }
  })

  const handleupdate = (value) => {
    let localdata = JSON.parse(localStorage.getItem("Coustomer"));

    let udata = localdata.map((l, i) => {
      if (l.id === value.id) {
        return value;
      } else {
        return l;
      }
    })
    console.log(udata);

    localStorage.setItem("Coustomer", JSON.stringify(udata))
    setOpen(false)
    setUpdate()
    loadData()

  }

  const handleSubmitdata = (value) => {
    let localdata = JSON.parse(localStorage.getItem("Coustomer"));

    let data = {
      id: Math.floor(Math.random() * 1000),
      ...value
    }

    if (localdata === null) {
      localStorage.setItem("Coustomer", JSON.stringify([data]))
    } else {
      localdata.push(data)
      localStorage.setItem("Coustomer", JSON.stringify(localdata))
    }

    setOpen(false);
    loadData()

  }

  const columns2 = [

    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'Admit_date', headerName: ' Admit_date', width: 130 },
    { field: 'Decharge_date', headerName: 'Decharge_date', width: 130 },
    { field: 'Bill', headerName: 'Bill', width: 130 },
    {
      field: 'delete', headerName: 'Delete', width: 130,
      renderCell: (params) => (
        <>
          <IconButton aria-label="delete" onClick={() => handleClickDopen(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      )
    },
    {
      field: 'edit', headerName: 'Edit', width: 130,
      renderCell: (params) => (
        <>
          <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
            <CreateIcon />
          </IconButton>
        </>
      )
    }
  ];



  const handleEdit = (data) => {
    setOpen(true);
    setUpdate(data);
    formik.setValues(data);
    // console.log(data);
  }

  const handleDelete = () => {
    let localData = JSON.parse(localStorage.getItem("Coustomer"))

    let filterData = localData.filter((v, i) => v.id !== did);

    localStorage.setItem("Coustomer", JSON.stringify(filterData));
    loadData()

    setDopen(false)
  }

  const loadData = () => {
    let localData = JSON.parse(localStorage.getItem("Coustomer"))

    if (localData !== null) {
      setData(localData)
    }
  }

  useEffect(
    () => {
      loadData()
    },
    [])
  return (
    <Box>
      <Container>
        <div>
          <center>
            <Button variant="outlined" onClick={() => handleClickOpen()}>
              Add Coustomer
            </Button>
          </center>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={data}
              columns={columns2}

              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />

          </div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Coustomer details</DialogTitle>
            <Formik values={formik}>
              <Form onSubmit={formik.handleSubmit}>
                <DialogContent>

                  <TextField
                    margin="dense"
                    name="name"
                    label="Full name"
                    type="name"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.name}
                    helperText={formik.errors.name}
                    error={formik.errors.name ? true : false}

                  />

                  <TextField
                    margin="dense"
                    name="Admit_date"
                    label="Admit_date"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.Admit_date}
                    helperText={formik.errors.Admit_date}
                    error={formik.errors.Admit_date ? true : false}
                  />
                  <TextField
                    margin="dense"
                    name="Decharge_date"
                    label="Decharge_date"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.Decharge_date}
                    helperText={formik.errors.Decharge_date}
                    error={formik.errors.Decharge_date ? true : false}

                  />
                  <TextField
                    margin="dense"
                    name="Bill"
                    label="Bill"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.Bill}
                    helperText={formik.errors.Bill}
                    error={formik.errors.Bill ? true : false}
                  />
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    {
                      Update ?
                        <Button type="submit">Update</Button>
                        :
                        <Button type="submit">Submit</Button>
                    }
                  </DialogActions>
                </DialogContent>
              </Form>
            </Formik>
          </Dialog>
          <div>
            <Dialog
              open={dopen}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are You Sure Delete Medicine Data ...? "}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">

                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => handleDelete()} autofocus>yes</Button>
                <Button onClick={handleClose}>No</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </Container>
    </Box>

  );
}

export default Coustomer;