import * as React from 'react'
import { ColorCode } from '../enum/colorCodes.ts';
import { Box } from '@mui/material';
import dinkLogo from '../Dink-mongram.png'


const MenuBar = (props) => {

    return (
        
        <Box position='fixed' sx={{top:0}}>
            <img src={dinkLogo} className="Dink-logo" alt="logo"/>
            //add paper

        </Box>
            
        
        
    )
}

export default MenuBar