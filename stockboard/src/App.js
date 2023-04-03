import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Container } from "@mui/material";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Container>
            <main className={"content"}>
              <Topbar />
            </main>
          </Container>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
