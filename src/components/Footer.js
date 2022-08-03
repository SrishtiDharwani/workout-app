import React from 'react';
import {Box, Stack,Typography} from "@mui/material";
import Logo from "../assets/images/dumbbell.png";

const Footer = () => {
  return (
    <Box mt='80px' pb='20px' bgcolor="#fff3f4" alignItems='center' width="100vw">
      <Stack gap='40px' alignItems='center' px='40px' justifyContent='center' pt='15px' direction="row">
      <img src={Logo} alt="logo" width='60px' height='60px'/>
        <Typography pb='40px' mt='20px' fontWeight={600} fontSize='20px' color='#ff2526' alignItems='center' letterSpacing={3} lineHeight='50px'>
          Work-It-Out
        </Typography>
      </Stack>
      <Typography variant='h6' align='center'>Made with ❤️. </Typography>
    </Box>
  )
}

export default Footer