import React from 'react'
import Box from "@mui/material/Box";
import { Button, Stack } from '@mui/material';
import { BsFilter } from 'react-icons/bs';

const ClientsDashboard = () => {
  return (
    <Box height={'100%'} width={'100%'} >
      <Stack direction={'row'}>
        <Box width={'10%'} p={1} borderBottom={'2px dashed'} borderColor={'lightgray'} ><button className='bg-blue-400 rounded-lg p-2' ><BsFilter/></button></Box>
        <Box width={'90%'} display={'flex'} justifyContent={'space-evenly'} p={1} borderBottom={'2px dashed'} borderColor={'lightgray'} >
          <button className=' bg-blue-400/40 hover:bg-blue-400 h-8 w-40 rounded-md' >CPU</button>
          <button className=' bg-blue-400/40 hover:bg-blue-400 h-8 w-40 rounded-md' >Memory</button>
          <button className=' bg-blue-400/40 hover:bg-blue-400 h-8 w-40 rounded-md' >Disk</button>
        </Box>
        <Box></Box>
      </Stack>
    </Box>
  )
}

export default ClientsDashboard