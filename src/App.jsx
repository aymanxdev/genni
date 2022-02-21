import theme from "./styles/globalVar";
import { ThemeProvider } from "styled-components";

import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import InvoiceTemplate from "./components/generate-invoice/InvoiceTemplate";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />

        <InvoiceTemplate />
      </div>
    </ThemeProvider>
  );
}

export default App;
