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
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Sidebar />
          <Container>
            <main className={"content"}>
              <Topbar searchValue={searchValue} setSearchValue={setSearchValue} />
              <Router>
                <Routes>
                  <Route path="/" element={<Dashboard searchValue={searchValue} />} />
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
