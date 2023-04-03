import {useState} from "react";
import {ProSidebar, Menu, MenuItem} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, colors, IconButton, Typography, useTheme} from "@mui/material";
// import { Link } from "react-router-dom";
import {tokens} from "../../theme";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";



const Sidebar = () =>{
    const theme = useTheme();
    const color = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed ] = useState(false);
    // eslint-disable-next-line
    const [selected,setSelected] = useState("Dashboard")
    return (
        <Box
          sx={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100vh",
              zIndex: 1000,
            "& .pro-sidebar-inner": {
              background: `${color.primary[400]} !important`,
            },
            "& .pro-icon-wrapper": {
              backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
              padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
              color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
              color: "#6870fa !important",
            },
          }}
        >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{

              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
            {/*USER*/}
            {!isCollapsed &&(
                <Box mb={"25px"}>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <img
                            alt={"profile-user"}
                            width={"100px"}
                            height={"100px"}
                            src={'../../assets/user.jpg'}
                            style={{ cursor : "pointer", borderRadius:"50%"}}
                        />
                    </Box>

                    <Box textAlign={"center"}>
                        <Typography variant={"h2"} color={colors.grey[100]} fontWeight={"bold"} sx={{ m: "10px 0 0 0"}}>Lesly Williams</Typography>
                        <Typography variant={"h5"} color={colors.green[500]}>VP Fancy Admin</Typography>
                    </Box>
                </Box>
            )}

        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;