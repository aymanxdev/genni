import theme from "./styles/globalVar";
import { ThemeProvider } from "styled-components";
import { PDFViewer } from "@react-pdf/renderer";

import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import InvoiceTemplate from "./components/generate-invoice/InvoiceTemplate";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <PDFViewer>
          <InvoiceTemplate />
        </PDFViewer>
      </div>
    </ThemeProvider>
  );
}

export default App;
