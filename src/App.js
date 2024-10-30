
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Add from './components/Add';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import SideBar from './components/Sidebar';
import React, { useState } from 'react';

function App() {
  const [mode,setMode] = useState("light")

  const darkTheme = createTheme({
    palette:{
    mode: mode
      }
    })

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <SideBar setMode={setMode} mode={mode}/>
      <Feed/>
      <Rightbar/>
    </Stack>
    <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
