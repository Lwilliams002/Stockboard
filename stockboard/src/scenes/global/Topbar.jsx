import {
  Box,
  IconButton,
  useTheme,
  InputBase,
} from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkMode";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = ({ searchValue, setSearchValue}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [searchInput, setSearchInput] = useState("");
  const onSearch = (value) => {
    setSearchValue(value);
};
  const handleSearch = () => {
  console.log("Searching for:", searchInput);
  console.log("Current searchValue:", searchValue);
  setSearchValue(searchInput.toUpperCase());
};

  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      {/* SEARCH BAR */}
      <Box display={"flex"} backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          placeholder={"Search"}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <IconButton type={"button"} sx={{ p: 1 }} onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display={"flex"}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;