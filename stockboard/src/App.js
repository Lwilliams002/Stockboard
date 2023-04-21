import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Container } from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import {useState} from "react";



function App() {
  const [searchValue, setSearchValue] = useState('TSLA')
  const [theme, colorMode] = useMode();
  const [lineColor, setLineColor] = useState("#20c997");
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div width={150}>
          <Sidebar />
          <Container>
            <main className={"content"}>
              <Topbar searchValue={searchValue} setSearchValue={setSearchValue} lineColor={lineColor} setLineColor={setLineColor} />
              <Router>
                <Routes>
                  <Route path="/" element={<Dashboard searchValue={searchValue} lineColor={lineColor} setLineColor={setLineColor} />} />
                  {/*<Route path="/team" element={<Dashboard />} />*/}
                  {/*<Route path="/contacts" element={<Dashboard />} />*/}
                  {/*<Route path="/invoices" element={<Dashboard />} />*/}
                  {/*<Route path="/form" element={<Dashboard />} />*/}
                  {/*<Route path="/bar" element={<Dashboard />} />*/}
                  {/*<Route path="/pie" element={<Dashboard />} />*/}
                  {/*<Route path="/line" element={<Dashboard />} />*/}
                  {/*<Route path="/faq" element={<Dashboard />} />*/}
                  {/*<Route path="/geography" element={<Dashboard />} />*/}
                  {/*<Route path="/calendar" element={<Dashboard />} />*/}

                </Routes>
              </Router>
            </main>
          </Container>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
