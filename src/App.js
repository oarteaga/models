import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

//import Container from '@mui/material/Container';
//import CustomizedDialogs from './components/dialog.tsx'
//import Model from './components/model.tsx'
import { Models } from './components/model.tsx';


const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


/*
import {Test} from './components/test1.tsx'
import {GestorEstado} from './components/gestorEstado.tsx'
import './App.css';
function App() {
  console.log('App')
  return (
    <div className="App">
      <header className="App-header">
        <GestorEstado></GestorEstado> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Test v1='1' v2='2'>
          <p>Children1</p>
          <h1>Children2</h1>
        </Test>
      </header>
    </div>
  );
}
*/

function App() {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {
        <Models></Models>
        /*        
          <Model center={true}></Model>
          <CustomizedDialogs></CustomizedDialogs>
          <InputAdornments></InputAdornments>
          <Input2></Input2>
          <InputSearch></InputSearch>
          <CustomizedDialogs></CustomizedDialogs>
          <BasicTabs center={true}></BasicTabs>
        */
      }      
    </ThemeProvider>    
  )
}

export default App;
