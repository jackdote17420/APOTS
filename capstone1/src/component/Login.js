
import { Box, Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { ApotsState } from '../ApotsContext'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = ({handleClose}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {  setAlert } = ApotsState();
    const handleSubmit = async()=> {
        if(!password || !email){
            setAlert({
                open: true,
                message: 'vui lòng điền đầy đủ vào các ô đăng nhập ',
                type: 'error'
            });
            return;
         }
         try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            setAlert({
                open: true, 
                message: `Đăng nhâp thành công. Chào bạn ${result.user.email}`,
                type:"success"
             });
             handleClose();
         } catch (error) {
            setAlert({
                open: true, 
                message:'Sai tài khoản hoặc mật khẩu',
                type:"error"
             });
             return;
         }
    }
    return (
        <Box p={3} style={{ display: "flex", flexDirection: "column", gap: "20px"}}>
        <TextField variant="outlined" type="email" label="Nhập Email" value={email} onChange={(e)=>setEmail(e.target.value)} fullWidth>
        </TextField>
        <TextField variant="outlined" type="password" label="Nhập Mật khẩu" value={password} onChange={(e)=>setPassword(e.target.value)} fullWidth>
        </TextField>
        <Button  variant="contained" size="large" style={{ backgroundColor: "#EEBC1D"}} onClick={handleSubmit}>
            Đăng nhập
        </Button>     
    </Box>
    )
}

export default Login
