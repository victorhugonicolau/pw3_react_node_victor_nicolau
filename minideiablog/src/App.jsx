import * as React from 'react';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './navbar/navbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './App.css'

function App() {

  return (
    <>
      <div>
        <ResponsiveAppBar />
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography variant="h4" gutterBottom>
            minha página da web informática da etec
          </Typography>
          <Button variant="contained">churinpis galilelus</Button>
        </Box>
      </div>
    </>
  )
}

export default App
