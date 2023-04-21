import {
  Box,
  IconButton,
  useTheme,
  InputBase,
  Tooltip, Link,
} from "@mui/material";
import { SketchPicker } from "react-color";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkMode";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = ({ searchValue, setSearchValue, lineColor, setLineColor}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);

  const handleClickAway = () => {
    setColorPickerVisible(false);
  };

  // Search Value is taken
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
        <Tooltip title="You have no new notifications">
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
        </Tooltip>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box>
            <IconButton onClick={() => setColorPickerVisible(!colorPickerVisible)}>
              <SettingsOutlinedIcon />
            </IconButton>
            {colorPickerVisible && (
              <Box zIndex={10} position="absolute">
                <SketchPicker
                  color={lineColor}
                  onChangeComplete={(color) => {
                    setLineColor(color.hex);
                  }}
                />
              </Box>
            )}
          </Box>
        </ClickAwayListener>
        <Tooltip title="GitHub Page">
          <Link href="https://github.com/lwilliams002" target="_blank" rel="noopener noreferrer">
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Link>
        </Tooltip>


      </Box>
    </Box>
  );
};

export default Topbar;