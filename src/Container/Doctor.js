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

function Doctor(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    let medicine = {
        name: yup.string().required('enter name'),
        price: yup.string().required('please enter price'),
        quantity: yup.string().required('please enter quantity'),
        expiry: yup.string().required('please enter expiry'),
    }


    let schema = yup.object().shape(medicine);

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: '',
            expiry: ''
        },
        validationSchema: schema,
        onSubmit: (value, { resetForm }) => {
            handleSubmitdata(value)
            resetForm();
        }
    })

    const handleSubmitdata = (value) => {
        let localdata = JSON.parse(localStorage.getItem("medicine"))

        let data = {
            id: Math.floor(Math.random() * 1000),
            ...value
        }

        if (localdata === null) {
            localStorage.setItem("medicine", JSON.stringify([data]))
        } else {
            localdata.push(data)
            localStorage.setItem("medicine", JSON.stringify(localdata))
        }

        setOpen(false);
        loadData()

    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: ' Price', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'expiry', headerName: 'Expiry', width: 130 },
    ];

    const loadData = () => {
        let localData = JSON.parse(localStorage.getItem("medicine"))

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
        <div>
            <Box>
                <Container>
                    <div>
                    <Button variant="outlined" onClick={handleClickOpen}>
                            Doctor details
                        </Button>
                        {
                            data !== null ?
                                <div style={{ height: 400, width: '100%' }}>
                                    <DataGrid
                                        rows={data}
                                        columns={columns}
                                        pageSize={5}
                                        rowsPerPageOptions={[5]}
                                        checkboxSelection
                                        disableSelectionOnClick
                                    />
                                </div>
                                : <p>empty table</p>
                        }
                      
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Add Medicine</DialogTitle>
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
                                        {
                                            formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : ''
                                        }

                                        <TextField
                                            margin="dense"
                                            id="price"
                                            label="price"
                                            type="price"
                                            fullWidth
                                            variant="standard"
                                            onChange={formik.handleChange}
                                            defaultValue={formik.values.price}
                                            helperText={formik.errors.price}
                                            error={formik.errors.price ? true : false}
                                        />
                                        {
                                            formik.errors.price && formik.touched.price ? <p>{formik.errors.price}</p> : ''
                                        }

                                        <TextField
                                            margin="dense"
                                            id="quantity"
                                            label="quantity"
                                            fullWidth
                                            variant="standard"
                                            onChange={formik.handleChange}
                                            defaultValue={formik.values.quantity}
                                            helperText={formik.errors.quantity}
                                            error={formik.errors.quantity ? true : false}
                                        />
                                        {
                                            formik.errors.quantity && formik.touched.quantity ? <p>{formik.errors.quantity}</p> : ''
                                        }

                                        <TextField
                                            margin="dense"
                                            id="expiry"
                                            label="expiry"
                                            fullWidth
                                            variant="standard"
                                            onChange={formik.handleChange}
                                            defaultValue={formik.values.expiry}
                                            helperText={formik.errors.expiry}
                                            error={formik.errors.expiry ? true : false}
                                        />
                                        {
                                            formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : ''
                                        }

                                        <DialogActions>
                                            <Button onClick={handleClose}>Cancel</Button>
                                            <Button type="submit">Submit</Button>
                                        </DialogActions>
                                    </DialogContent>
                                </Form>
                            </Formik>
                        </Dialog>
                    </div>
                </Container>
            </Box>
        </div>

    );
}

export default Doctor;



// [7:30 am, 20/05/2022] Rw3 Chintan: // import Dialog  from './Dialog'
// import React, { useEffect, useState } from 'react'
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// // import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import * as yup from 'yup';
// import { Form, Formik, useFormik } from 'formik';
// import { DataGrid } from '@mui/x-data-grid';



// export default function Medicine() {
//   const [open, setOpen] = React.useState(false);
//   const [data, setData] = useState([])

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };


//   let medicine = {
//     name: yup.string().required('enter name'),
//     price: yup.string().required('please enter price'),
//     quantity: yup.string().required('please enter quantity'),
//     expiry: yup.string().required('please enter expiry'),
//   }


//   let schema = yup.object().shape(medicine);

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       price: '',
//       quantity: '',
//       expiry: ''
//     },
//     validationSchema: schema,
//     onSubmit: (value, { resetForm }) => {
//       handleSubmitdata(value)
//       resetForm();
//     }
//   })

//   const handleSubmitdata = (value) => {
//     let localdata = JSON.parse(localStorage.getItem("medicine"))

//     let data = {
//       id: Math.floor(Math.random() * 1000),
//       ...value
//     }

//     if (localdata === null) {
//       localStorage.setItem("medicine", JSON.stringify([data]))
//     } else {
//       localdata.push(data)
//       localStorage.setItem("medicine", JSON.stringify(localdata))
//     }

//     setOpen(false);
//     loadData()

//   }

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'name', headerName: 'Name', width: 130 },
//     { field: 'price', headerName: ' Price', width: 130 },
//     { field: 'quantity', headerName: 'Quantity', width: 130 },
//     { field: 'expiry', headerName: 'Expiry', width: 130 },
//   ];

//   const loadData = () => {
//     let localData = JSON.parse(localStorage.getItem("medicine"))

//     if (localData !== null) {
//       setData(localData)
//     }
//   }

//   useEffect(
//     () => {
//       loadData()
//     },
//     [])

//   return (


//     <Box>
//       <Container>
//         <div>
//           {
//             data !== null ?
//               <div style={{ height: 400, width: '50%' }}>
//                 <DataGrid
//                   rows={data}
//                   columns={columns}
//                   pageSize={5}
//                   rowsPerPageOptions={[5]}
//                   checkboxSelection
//                   disableSelectionOnClick
//                 />
//               </div>
//               : <p>empty table</p>
//           }
//           <Button variant="outlined" onClick={handleClickOpen}>
//             Add Medicine
//           </Button>
//           <Dialog open={open} onClose={handleClose}>
//             <DialogTitle>Add Medicine</DialogTitle>
//             <Formik value={formik}>
//               <Form onSubmit={formik.handleSubmit}>
//                 <DialogContent>
//                   <TextField
//                     margin="dense"
//                     id="name"
//                     label="name"
//                     type="name"
//                     fullWidth
//                     variant="standard"
//                     onChange={formik.handleChange}
//                     defaultValue={formik.values.name}
//                     helperText={formik.errors.name}
//                     error={formik.errors.name ? true : false}
//                   />
//                   {
//                     formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : ''
//                   }

//                   <TextField
//                     margin="dense"
//                     id="price"
//                     label="price"
//                     type="price"
//                     fullWidth
//                     variant="standard"
//                     onChange={formik.handleChange}
//                     defaultValue={formik.values.price}
//                     helperText={formik.errors.price}
//                     error={formik.errors.price ? true : false}
//                   />
//                   {
//                     formik.errors.price && formik.touched.price ? <p>{formik.errors.price}</p> : ''
//                   }

//                   <TextField
//                     margin="dense"
//                     id="quantity"
//                     label="quantity"
//                     fullWidth
//                     variant="standard"
//                     onChange={formik.handleChange}
//                     defaultValue={formik.values.quantity}
//                     helperText={formik.errors.quantity}
//                     error={formik.errors.quantity ? true : false}
//                   />
//                   {
//                     formik.errors.quantity && formik.touched.quantity ? <p>{formik.errors.quantity}</p> : ''
//                   }

//                   <TextField
//                     margin="dense"
//                     id="expiry"
//                     label="expiry"
//                     fullWidth
//                     variant="standard"
//                     onChange={formik.handleChange}
//                     defaultValue={formik.values.expiry}
//                     helperText={formik.errors.expiry}
//                     error={formik.errors.expiry ? true : false}
//                   />
//                   {
//                     formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : ''
//                   }

//                   <DialogActions>
//                     <Button onClick={handleClose}>Cancel</Button>
//                     <Button type="submit">Submit</Button>
//                   </DialogActions>
//                 </DialogContent>
//               </Form>
//             </Formik>
//           </Dialog>
//         </div>
//       </Container>
//     </Box>

//   )
// }