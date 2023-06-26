import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Container } from "@mui/material";
import TopDash from "./scenes/dashboard/topDash";

function App() {
  const [searchValue, setSearchValue] = useState("TSLA");

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
              <Topbar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                lineColor={lineColor}
                setLineColor={setLineColor}
              />
              <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                  <Route
                    path="/"
                    element={

                      <Dashboard
                        searchValue={searchValue}
                        lineColor={lineColor}
                        setLineColor={setLineColor}
                      />
                    }
                  />
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