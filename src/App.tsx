import  theme  from './styles/globalVar';
import { ThemeProvider } from "styled-components";
 
import './App.css';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar />
    </div>
    </ThemeProvider>
  );
}

export default App;
