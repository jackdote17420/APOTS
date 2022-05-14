import React from 'react'
import { Box, Button, TextField } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    vdt: {
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
const Atm = () => {

    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
    const thanhtoan = () =>{
       alert('thanh toán thành công')
    }

  return (
      <div>
    <Box p={3} style={{ display: "flex", flexDirection: "column", gap: "20px"}}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Chọn ngân hàng thanh toán</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>BIDV</MenuItem>
          <MenuItem value={20}>Agribank</MenuItem>
          <MenuItem value={30}>TPbank</MenuItem>
        </Select>
      </FormControl>
      <TextField variant="outlined" type="text" label="Nhập số tài khoản"  fullWidth>
     </TextField>
    <Button onClick={thanhtoan}  variant="contained" size="large" style={{ backgroundColor: "#EEBC1D"}} >
        Thanh toán
    </Button>     
    </Box>
        <Box className={classes.vdt}>
        <span>OR</span>
        <Button  variant="contained" size="large" style={{ backgroundColor: "#EEBC1D"}}  >
                Sử dụng ví điện tử
         </Button>  
        </Box>
    </div>
  )
}

export default Atm
