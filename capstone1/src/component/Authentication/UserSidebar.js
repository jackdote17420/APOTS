import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { ApotsState } from '../../ApotsContext';
import { Avatar } from '@material-ui/core';
import { signOut } from '@firebase/auth';
import { auth } from '../../firebase/firebase';


const useStyles = makeStyles({
 container:{
     
     padding: 25,
     height: "100%",
     display: "flex",
     flexDirection: "column",
     fontFamily: "monospace",
 },
 profile:{
     flex:1,
     display: "flex",
     flexDirection: "column",
     textAlign:"center",
     gap:"20px",
     height:"90%"
 },
 picture:{
     width:150,
     height:150,
     cursor: "pointer",
     backgroundColor:"#EEBC1D",
     objectFit:"contain"
 },
 logout:{
     height:"5%",
     width:"100%",
     backgroundColor:"#EEBC1D",
     marginBottom:20
 },
 btn:{
    flex:1,
    display: "flex",
    flexDirection: "column",
    textAlign:"center",
    gap:"20px",
    height:"90%",
    fontSize: "20px"

 }
});

export default function UserSidebar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const {  user, setAlert } = ApotsState();

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const logOut =()=>{
    signOut(auth);
    setAlert({
        open: true,
        message: 'Đăng xuất thành công',
    });
    toggleDrawer();
    };
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>

          <Avatar 
              onClick={toggleDrawer(anchor, true)}
              style={{
                height: 38,
                width: 38,
                marginLeft: 15,
                cursor: "pointer",
                backgroundColor: "#EEBC1D"
              }}
              src={user.photoURL}
              alt={user.displayName || user.email}
          />
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            <div className={classes.container}>
                <div className={classes.profile}>
                    <Avatar
                        className={classes.picture}
                        src={user.photoURL}
                        alt={user.displayName || user.email}
                    />  
                    <span
                        style={{
                            width:"100%",
                            fontSize:25,
                            textAlign:"center",
                            fontWeight:"bolder",
                            wordWrap:"break-word"
                        }}
                    >
                        {user.displayName || user.email}
                    </span>  
                    <div className={classes.btn}>
                        <Button variant="outlined" color="primary" href="store">
                            <i className="bx bxs-store"  /> Cửa hàng của tôi
                        </Button>
                        <Button variant="outlined" color="primary"  href="contact">
                              <i className="bx bxs-contact" />  Thông tin cửa hàng
                        </Button>
                    </div>
                           
                </div>
                <Button variant="contained" className={classes.logout} onClick={logOut} >
                    Đăng Xuất
                </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}