import React from 'react'
import { Box, Button, TextField } from '@material-ui/core'

const dathang = () =>{
  alert('đặt hàng thành công')
}
const Atm = () => {
  return (
    <Box p={3} style={{ display: "flex", flexDirection: "column", gap: "20px"}}>
    <TextField variant="outlined" type="text" label="Nhập số điện thoại"   fullWidth>
    </TextField>
    <TextField variant="outlined" type="text" label="Nhập địa chỉ nhận hàng"   fullWidth>
    </TextField>
    <TextField variant="outlined" type="password" label="Nhập thời gian giao hàng mong muốn"  fullWidth>
    </TextField>
    <Button onClick={dathang}  variant="contained" size="large" style={{ backgroundColor: "#EEBC1D"}} >
        Đặt hàng
    </Button>     
</Box>
  )
}

export default Atm
