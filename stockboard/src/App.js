import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Container } from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/dashboard";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contact";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Sidebar />
          <Container>
            <main className={"content"}>
              <Topbar />
              <Router>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
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
