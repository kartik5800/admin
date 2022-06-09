// import React, { useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { DataGrid } from '@mui/x-data-grid';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';


// function Medicine(props) {
//     const [open, setOpen] = React.useState(false);
//     const [name, setname] = useState('');
//     const [price, setprice] = useState('');
//     const [quntity, setquntity] = useState('');
//     const [expiry, setexpiry] = useState('');
//     const [Data, setData] = useState([]);
//     const [Dopen, setDOpen] = useState(false);
//     const [did , setdid] = useState()

//     const columns = [
//         { field: 'id', headerName: 'ID', width: 90 },
//         {
//             field: 'name',
//             headerName: 'Name',
//             width: 150,
//             editable: false,
//         },
//         {
//             field: 'price',
//             headerName: 'price',
//             width: 150,
//             editable: false,
//         },
//         {
//             field: 'quntity',
//             headerName: 'quntity',
//             type: 'number',
//             width: 150,
//             editable: false,
//         },
//         {
//             field: 'expiry',
//             headerName: 'expiry',
//             sortable: false,
//             width: 160,
//         },


//         {
//             field: 'action',
//             headerName: 'action',
//             sortable: false,
//             width: 500,
//             renderCell: (params) => (
//                 <>
//                     <Button variant="outlined" onClick={() => handleDeleteClickOpen(id)} startIcon={<DeleteIcon />}>
//                         Delete
//                     </Button>
//                     <Button variant="contained" onClick={() => handleUpdate(params.row.id)} endIcon={<EditIcon />}>
//                         Update
//                     </Button>
//                 </>
//             )
//         },
//     ];


//     const handleDelete = (params) => {
//         let localData = JSON.parse(localStorage.getItem('medicine'));
//         let filterData = localData.filter((v, i) => v.id !== did);
//         localStorage.setItem("medicine", JSON.stringify(filterData))
//         setdid();
//         loadData()

//     }

//     const handleUpdate = (id) => {
//         let localData = JSON.parse(localStorage.getItem('medicine'));
//         //    console.log(localdata);

//     }


//     const loadData = () => {
//         let localData = JSON.parse(localStorage.getItem("medicine"))
//         console.log("localData", localData);

//         if (loadData !== null) {
//             setData(localData);
//         }


//     }

//     useEffect(
//         () => {
//             loadData();
//         },
//         [])


//     const handleDeleteClose = (id) => {
//         let localData = JSON.parse(localStorage.getItem('medicine'));
//         let filterData = localData.filter((v, i) => v.id !== did);
//         localStorage.setItem("medicine", JSON.stringify(filterData))
//         loadData()
//     };




//     const handleClickOpen = () => {
//         setOpen(true);
//     };


//     const handleDeleteClickOpen = () => {
//         setDOpen(true);
//         setdid(id)
//     };

//     const handleClose = () => {
//         setDOpen(false);
//     };

//     const handleSubmit = () => {
//         let localData = JSON.parse(localStorage.getItem("medicine"));

//         let Data = {
//             id: Math.floor(Math.random() * 1000),
//             name,
//             price,
//             quntity,
//             expiry
//         }

//         console.log(Data);

//         if
//             (localData === null) {
//             localStorage.setItem("medicine", JSON.stringify([Data]))
//         } else {
//             localData.push(Data);
//             localStorage.setItem("medicine", JSON.stringify(localData))
//         }
//         loadData()
//         setOpen(false);
//     }


//     return (
//         <div>
//             <Box>
//                 <Container>
//                     <div>
//                         <Button variant="outlined" onClick={handleClickOpen}>
//                             ADD MEDICINE
//                         </Button>
//                         {
//                             Data !== null ?
//                                 <div style={{ height: 400, width: '100%' }}>
//                                     <DataGrid
//                                         rows={Data}
//                                         columns={columns}
//                                         pageSize={5}
//                                         rowsPerPageOptions={[5]}
//                                         checkboxSelection
//                                         disableSelectionOnClick
//                                     />
//                                 </div>
//                                 : <p>empty table</p>
//                         }
//                         <Dialog open={open} onClose={handleClose}>
//                             <DialogTitle>Add medicine</DialogTitle>
//                             <DialogContent>

//                                 <TextField
//                                     autoFocus
//                                     margin="dense"
//                                     name='name'
//                                     id="name"
//                                     label="medicine name"
//                                     fullWidth
//                                     variant="standard"
//                                     onChange={(e) => setname(e.target.value)}

//                                 />
//                                 <TextField
//                                     autoFocus
//                                     margin="dense"
//                                     id="price"
//                                     label="medicine price"
//                                     fullWidth
//                                     variant="standard"
//                                     onChange={(e) => setprice(e.target.value)}
//                                 />
//                                 <TextField
//                                     autoFocus
//                                     margin="dense"
//                                     id="quntity"
//                                     label="medicine quntity"
//                                     fullWidth
//                                     variant="standard"
//                                     onChange={(e) => setquntity(e.target.value)}
//                                 />
//                                 <TextField
//                                     autoFocus
//                                     margin="dense"
//                                     id="expiry"
//                                     label="medicine expiry"
//                                     fullWidth
//                                     variant="standard"
//                                     onChange={(e) => setexpiry(e.target.value)}
//                                 />
//                             </DialogContent>
//                             <DialogActions>
//                                 <Button onClick={handleClose}>Cancel</Button>
//                                 <Button onClick={handleSubmit}>Submit</Button>
//                             </DialogActions>
//                         </Dialog>

//                         <Dialog
//                             open={Dopen}
//                             onClose={handleClose}
//                             aria-labelledby="alert-dialog-title"
//                             aria-describedby="alert-dialog-description"
//                         >
//                             <DialogTitle id="alert-dialog-title">
//                                 <h1>are you sure to delete</h1>
//                             </DialogTitle>

//                             <DialogActions>
//                                 <Button onClick={handleClose}>NO</Button>
//                                 <Button onClick={handleDelete} >
//                                    YES
//                                 </Button>
//                             </DialogActions>
//                         </Dialog>
//                     </div>
//                 </Container>

//             </Box>

//         </div>
//     );
// }

// export default Medicine;

import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';


export default function Medicine() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiry, setExpiry] = useState('');
  const [data, setData] = useState([]);
  const [dopen, setDopen] = React.useState(false)
  const [did, setDid] = useState()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setDopen(false);
    setOpen(false);
  };

  const handleClickDopen = (id) => {
    setDopen(true);
    setDid(id);
  };

  const handSubmit = () => {
    // console.log(name, price, quantity, expiry);
    let data = {
      id: Math.floor(Math.random() * 1000),
      name,
      price,
      quantity,
      expiry
    }

    // console.log(data);
    let localdata = JSON.parse(localStorage.getItem("medicine"));

    if (localdata === null) {
      localStorage.setItem("medicine", JSON.stringify([data]))
    } else {
      localdata.push(data)
      localStorage.setItem("medicine", JSON.stringify(localdata))
    }


    setOpen(false);
    // setName();
    // setPrice();
    // setQuantity();
    // setExpiry();
    getdata()

  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'price', headerName: 'Pricee', width: 130 },
    { field: 'quantity', headerName: 'Quantity', width: 130 },
    { field: 'expiry', headerName: 'Expiry', width: 130 },
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
          <IconButton aria-label="delete" onClick={() => handleEdit(params.row.id)}>
            <CreateIcon />
          </IconButton>
        </>
      )
    }
  ];

  const handleEdit = () => {

  }

  const handleDelete = () => {
    let localData = JSON.parse(localStorage.getItem("medicine"))

    let filterData = localData.filter((v, i) => v.id !== did);

    localStorage.setItem("medicine", JSON.stringify(filterData));
    getdata()

    setDopen(false)
  }

  const getdata = () => {
    let localdata = JSON.parse(localStorage.getItem("medicine"));

    if (localdata !== null) {
      setData(localdata)
    }
  }

  useEffect(
    () => {
      getdata()
    },
    [])

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Medicine1
      </Button>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Medicine</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name='name'
            label="Medicine name"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            name='price'
            label="Medicine price"
            fullWidth
            variant="standard"
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="quantity"
            name='quantity'
            label="Medicine quantity"
            fullWidth
            variant="standard"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="expiry"
            name='expiry'
            label="Medicine expiry"
            fullWidth
            variant="standard"
            onChange={(e) => setExpiry(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <div>

        <Dialog
          open={dopen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {" Are You Sure Delete Medicine Data ...?  "}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDelete}>yes</Button>
            <Button onClick={handleClose} >No</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>

  )
}