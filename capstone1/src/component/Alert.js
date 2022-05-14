import { Snackbar } from '@material-ui/core'
import React from 'react'
import { ApotsState } from '../ApotsContext'
import MuiAlert from '@material-ui/lab/Alert'
const Alert = () => {

    const { alert, setAlert } = ApotsState();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setAlert({ open: false    });
    }; 

    return (
        <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose} >
            <MuiAlert onClose={handleClose} variant="filled" elevation={10} severity={alert.type} style={{ height:"120px", textAlign:"center", fontSize:"30px",}} >
                {alert.message}
            </MuiAlert>
        </Snackbar>
    )
}

export default Alert
