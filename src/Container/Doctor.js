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
import { getdoctor } from '../redux/action/medicine.action';
import { useDispatch, useSelector } from 'react-redux';
import { doctordata, postdoctor,deletedoctor } from '../redux/action/doctors.action';




export default function Doctor() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([])
  const [Update, setUpdate] = useState()

  const doctor = useSelector(state => state.doctor)


  // delete krva mate
  const handleDelete = (id) => {
    // let localData = JSON.parse(localStorage.getItem('Doctor'));
    // let filterData = localData.filter((d, i) => d.id !== id);
    // localStorage.setItem("Doctor", JSON.stringify(filterData))
    dispatch(deletedoctor(id))
    loadData()


  }
  //dialog box open krva mate
  const handleClickOpen = () => {
    setOpen(true);
  };

  // dialog box close krva mate
  const handleClose = () => {
    setOpen(false);
  };

  // validation mate 
  let Doctor = {
    name: yup.string().required('enter name'),
    designation: yup.string().required('please enter designation'),
    salary: yup.string().required('please enter salary'),
  }


  let schema = yup.object().shape(Doctor);

  // initial value aapva mate & scema mate
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

  // data update mate and dialog box close krva and new data set krva mate 
  const handleUpdateData = (value) => {
    let localData = JSON.parse(localStorage.getItem("Doctor"));
    let uData = localData.map((l, i) => {
      if (l.id === value.id) {
        return value
      } else {
        return l;
      }
    })

    localStorage.setItem("Doctor", JSON.stringify(uData));

    setOpen(false);
    setUpdate();
    loadData();
    console.log(uData);

  }


  // data submit krva mate
  const handleSubmitdata = (value) => {
    // let localdata = JSON.parse(localStorage.getItem("Doctor"))


    // rendom id lavva mate
    let data = {
      id: Math.floor(Math.random() * 1000),
      ...value
    }

    // if (localdata === null) {
    //   localStorage.setItem("Doctor", JSON.stringify([data]))
    // } else {
    //   localdata.push(data)
    //   localStorage.setItem("Doctor", JSON.stringify(localdata))
    // }
    dispatch(postdoctor(data));
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
    // let localData = JSON.parse(localStorage.getItem("Doctor"))

    // if (localData !== null) {
    //   setData(localData)
    // }

    setData(doctor.doctor)
  }
  const dispatch = useDispatch();


  useEffect(
    () => {
      dispatch(doctordata())
      loadData()
    },
    [])

  const handleEdit = (data) => {
    setOpen(true);
    setUpdate(data);
    formik.setValues(data)

  }

  return (


    <Box>
      <Container>
        {
          doctor.isLoading ?
            <p>Loading....</p>
            :
            (doctor.error !== '' ?
              <p>{doctor.error}</p>
              :
              <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                  Add Doctor
                </Button>
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rows={data}
                    columns={columns1}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                  />
                </div>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Add Doctor</DialogTitle>
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
            )
        }
      </Container>
    </Box>

  )
}