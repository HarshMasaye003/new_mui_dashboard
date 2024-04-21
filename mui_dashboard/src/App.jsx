import { useState } from "react";
import Sidebar from "./Layout/Sidebar";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Mainboard from "./Layout/Mainboard";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Topbar from "./Layout/Topbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box height={"8vh"}  borderBottom={1} borderColor={'lightgray'}>
        <Topbar/>
      </Box>
      <Box height={"92vh"}>
        <Stack direction={"row"} height={'100%'}  width={'100vw'}>
          <Box borderRight={1} borderColor={'lightgray'} width={'14%'} >
            <Sidebar/>
          </Box>
          <Box width={'86%'} >
            <Mainboard/>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default App;
