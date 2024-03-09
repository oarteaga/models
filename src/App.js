import CustomizedDialogs from './components/dialog.tsx'
import DataGridDemo from './components/dataGrid.tsx'
import Button from '@mui/material/Button';
import InputAdornments from './components/input1.tsx'
import Input2 from './components/input2.tsx'
import InputSearch from './components/inputSearch.tsx'
import BasicTabs from './components/modelCard.tsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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

const tabsX = [
  {
    label: "Tab 111111",
    Component: <div>Hello, I am tab 1111111</div>
  },
  {
    label: "Tab 2222222",
    Component: <div>Hello, I am tab 2222222</div>
  },
];

function App() {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {
        //<InputAdornments></InputAdornments>
        //<Input2></Input2>
        //<InputSearch></InputSearch>
        //<CustomizedDialogs></CustomizedDialogs>
      }
      <BasicTabs center={true}></BasicTabs>
    </ThemeProvider>    
  )
}

export default App;
