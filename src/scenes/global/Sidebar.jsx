import {useState} from "react";
import {ProSidebar, Menu, MenuItem} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, colors, IconButton, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";




const Sidebar = () =>{
    const resources = [
  {
    name: "React",
    link: "https://reactjs.org/",
  },
  {
    name: "Material-UI",
    link: "https://mui.com/",
  },
  {
    name: "Nivo",
    link: "https://nivo.rocks/",
  },
  {
    name: "YFinance",
    link: "https://pypi.org/project/yfinance/",
  },
  {
    name: "Flask",
    link: "https://flask.palletsprojects.com/",
  },
  // Add more resources as needed
];
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
              color: colors.grey[600],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={theme.palette.text.primary}>
                  Stockboard
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
                          src={`${process.env.PUBLIC_URL}/user.jpg`}
                          style={{ cursor: "pointer", borderRadius: "50%" }}
                        />
                    </Box>

                    <Box textAlign={"center"}>
                        <Typography variant={"h2"} color={theme.palette.text.primary} fontWeight={"bold"} sx={{ m: "10px 0 0 0"}}>Lesly Williams</Typography>
                        <Typography variant={"h5"} color={colors.green[500]}>Software Developer</Typography>
                    </Box>

                </Box>

            )}
            <MenuItem>
               {!isCollapsed && (
                  <Box mb={"25px"}>
                    <Box textAlign={"left"}>
                      <Typography variant={"h2"} color={theme.palette.text.primary} mt={2}>
                        Resources
                      </Typography>
                    </Box>
                    <Box >
                      {resources.map((resource) => (
                        <MenuItem key={resource.name}>
                            <Box component="span">
                                <a
                                    href={resource.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        textDecoration: "none",
                                        color: theme.palette.text.primary,
                                        display: "block", // Add display property
                                        paddingTop: "10px", // Add padding to individual link
                                        paddingBottom: "10px", // Add padding to individual link
                                    }}
                                  >
                                    {resource.name}
                                </a>
                            </Box>
                        </MenuItem>
                      ))}
                    </Box>
                  </Box>
                )}
            </MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;