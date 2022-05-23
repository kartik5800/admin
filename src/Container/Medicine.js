import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Medicine(props) {
    const [open, setOpen] = React.useState(false);
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [quntity, setquntity] = useState('');
    const [expiry, setexpiry] = useState('');
    const [Data, setData] = useState([]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: false,
        },
        {
            field: 'price',
            headerName: 'price',
            width: 150,
            editable: false,
        },
        {
            field: 'quntity',
            headerName: 'quntity',
            type: 'number',
            width: 150,
            editable: false,
        },
        {
            field: 'expiry',
            headerName: 'expiry',
            sortable: false,
            width: 160,
        },


        {
            field: 'action',
            headerName: 'action',
            sortable: false,
            width: 500,
            renderCell: (params) => (
                <>
                <Button variant="outlined" onClick={() => handleDelete(params.row.id) } startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<EditIcon />}>
                Update
              </Button>
              </>
            )
        },
    ];


    const handleDelete = (id) =>{
        let localData = JSON.parse(localStorage.getItem('medicine'));
        let filterData = localData.filter((v,i) => v.id !== id);
        localStorage.setItem("medicine",JSON.stringify(filterData))
        loadData()

    }

    const loadData = () => {
        let localData = JSON.parse(localStorage.getItem("medicine"))
        console.log("localData", localData);

        if (loadData !== null) {
            setData(localData);
        }


    }

    useEffect(
        () => {
            loadData();
        },
        [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleSubmit = () => {
        let localData = JSON.parse(localStorage.getItem("medicine"));

        let Data = {
            id: Math.floor(Math.random() * 1000),
            name,
            price,
            quntity,
            expiry
        }

        console.log(Data);

        if
            (localData === null) {
            localStorage.setItem("medicine", JSON.stringify([Data]))
        } else {
            localData.push(Data);
            localStorage.setItem("medicine", JSON.stringify(localData))
        }
        loadData()
        setOpen(false);
    }


    return (
        <div>
            <Box>
                <Container>
                    <div>
                        <Button variant="outlined" onClick={handleClickOpen}>
                            ADD MEDICINE
                        </Button>
                        {
                            Data !== null ?
                                <div style={{ height: 400, width: '100%' }}>
                                    <DataGrid
                                        rows={Data}
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
                            <DialogTitle>Add medicine</DialogTitle>
                            <DialogContent>

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    name='name'
                                    id="name"
                                    label="medicine name"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => setname(e.target.value)}

                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="price"
                                    label="medicine price"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => setprice(e.target.value)}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="quntity"
                                    label="medicine quntity"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => setquntity(e.target.value)}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="expiry"
                                    label="medicine expiry"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => setexpiry(e.target.value)}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleSubmit}>Submit</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </Container>

            </Box>

        </div>
    );
}

export default Medicine;