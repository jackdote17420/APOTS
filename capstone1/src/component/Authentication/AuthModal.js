import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AppBar, Box, Button, Tab, Tabs } from '@material-ui/core';
import Login from '../Login';
import Register from '../Register';
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { auth,  } from '../../firebase/firebase';
import { ApotsState } from '../../ApotsContext';
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
  google:{
    padding:24,
    paddingTop:0,
    display:"flex",
    flexDirection:"column",
    textAlign:"center",
    gap:20,
    frontSize: 30,
    fontWeight:"bold",
  }
}));

export default function AuthModal() {
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
  const {setAlert} = ApotsState();
  const googleProvider = new GoogleAuthProvider()  
  const signInWithGoogle =() =>{
    signInWithPopup(auth, googleProvider).then(res=>{
      setAlert({
        open: true, 
        message: `Đăng nhâp thành công. Chào bạn ${res.user.email}`,
        type:"success"
     });
     handleClose();
    }).catch(error=>{
      setAlert({
        open: true, 
        message:'Sai tài khoản hoặc mật khẩu',
        type:"error"
     });
     return;
    })
  }

  return (
    <div>
      <Button
      variant="contained" style={{ width:200, height:40, backgroundColor: "#EEBC1D"}}
      onClick={handleOpen}>
        Đăng nhập
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
                <Tab label="Đăng nhập"/>
                <Tab label="Đăng ký"/>
            </Tabs>
                
            </AppBar>
            {value===0 && <Login handleClose={handleClose}/>}
            {value===1 && <Register handleClose={handleClose} />}
            <Box className={classes.google}>
              <span>OR</span>
              <GoogleButton
                style={{ width:"100%", outline:"none"}}
                onClick={signInWithGoogle}
              ></GoogleButton>
            </Box>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}