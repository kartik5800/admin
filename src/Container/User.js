// import Dialog  from './Dialog'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';




export default function User() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([])
  const [Update, setUpdate] = useState()
const [filterdata , setfilterdata] = useState([]);

  const handleDelete = (id) => {
    let localData = JSON.parse(localStorage.getItem('User'));
    let filterData = localData.filter((d, i) => d.id !== id);
    localStorage.setItem("User", JSON.stringify(filterData))
    loadData()

  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  let Doctor = {

    name: yup.string().required('enter name'),
    designation: yup.string().required('please enter designation'),
    salary: yup.string().required('please enter salary'),


  }


  let schema = yup.object().shape(User);

  const formik = useFormik({
    initialValues: {
      name: '',
      designation: '',
      salary: '',
    },
    validationSchema: schema,
    onSubmit: (value, { resetForm }) => {
      if (Update) {
        handleUpdateData(value)
      } else {
        handleSubmitdata(value)
      }
      resetForm();
    }
  });

  const handleUpdateData = (value) => {
    let localData = JSON.parse(localStorage.getItem("User"));
    let uData = localData.map((l, i) => {
      if (l.id === value.id) {
        return value
      } else {
        return l;
      }
    })

    localStorage.setItem("User", JSON.stringify(uData));

    setOpen(false);
    setUpdate();
    loadData();
    console.log(uData);

  }



  const handleSubmitdata = (value) => {
    let localdata = JSON.parse(localStorage.getItem("User"))

    let data = {
      id: Math.floor(Math.random() * 1000),
      ...value
    }

    if (localdata === null) {
      localStorage.setItem("User", JSON.stringify([data]))
    } else {
      localdata.push(data)
      localStorage.setItem("User", JSON.stringify(localdata))
    }

    setOpen(false);
    loadData()

  }

  const columns1 = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'designation', headerName: ' designation', width: 130 },
    { field: 'salary', headerName: 'salary', width: 130 },
    {
      field: 'action', headerName: 'acton', width: 260,
      renderCell: (params) => (
        <>
          <Button variant="outlined" onClick={() => handleDelete(params.row.id)} startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" onClick={() => handleEdit(params.row)} endIcon={<EditIcon />}>
            Update
          </Button>
        </>
      )
    },
  ];

  const loadData = () => {
    let localData = JSON.parse(localStorage.getItem("User"))

    if (localData !== null) {
      setData(localData)
    }
  }

  useEffect(
    () => {
      loadData()
    },
    [])

  const handleEdit = (data) => {
    setOpen(true);
    setUpdate(data);
    formik.setValues(data)

  }

  const handlesearch = (serval) => {
    let serdata = JSON.parse(localStorage.getItem("User"));
  

    let fdata = serdata.filter((l) =>(
      l.id.toString().includes(serval.toString()) ||
      l.name.toString().toLowerCase().includes(serval.toLowerCase()) ||
      l.designation.toString().includes(serval) ||
      l.salary.toString().includes(serval)
  ))

  setfilterdata(fdata);
    }



    const filterfinal = filterdata.length > 0 ? filterdata : data;

  return (


    <Box>
      <Container>

        <TextField
          margin="dense"
          id="search"
          label="search"
          fullWidth
          variant="standard"
          onChange={(e) => handlesearch(e.target.value)}
        />
        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add User
          </Button>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={filterfinal}
              columns={columns1}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add User</DialogTitle>
            <Formik value={formik}>
              <Form onSubmit={formik.handleSubmit}>
                <DialogContent>

                  <TextField
                    margin="dense"
                    id="name"
                    label="name"
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
                    id="designation"
                    label="designation"
                    type="designation"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.designation}
                    helperText={formik.errors.designation}
                    error={formik.errors.designation ? true : false}
                  />
                  <TextField
                    margin="dense"
                    id="salary"
                    label="salary"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.salary}
                    helperText={formik.errors.salary}
                    error={formik.errors.salary ? true : false}

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
        </div>
      </Container>
    </Box>

  )
}