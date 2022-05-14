import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AppBar, Button, Tab, Tabs } from '@material-ui/core';
import Atm from './Atm';
import Money from '../Authentication/Money'


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  paper: {
    width: 800,
    backgroundColor: theme.palette.background.paper,
    color: "black",
    borderRadius: 10,
  },
}));

export default function ThanhToan() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);};
  
  

  return (
    <div>
      <Button
      variant="contained" style={{ width:200, height:65, backgroundColor: "#EEBC1D", borderRadius:"20px"}}
      onClick={handleOpen}>
        Thanh toán
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <AppBar position="static" style={{ backgroundColor: "transparent", color:"black"}}>
            <Tabs value={value} onChange={handleChange} variant="fullWidth" style={{ borderRadius:10}}>
                <Tab label="Đặt hàng"/>
                <Tab label="Thanh toán qua ngân hàng"/>
            </Tabs>
                
            </AppBar>
            {value===0 && <Money handleClose={handleClose}/>}
            {value===1 && <Atm handleClose={handleClose} />}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}