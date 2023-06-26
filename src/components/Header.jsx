import {Typography, Box, useTheme, colors} from "@mui/material";
import {tokens} from "../theme";

const Header = ({title, subtitle, size}) =>{
    const theme = useTheme();
    // eslint-disable-next-line
    const color = tokens(theme.palette.mode)
    return (
        <Box>
            <Typography
                variant={size}
                color={theme.palette.text.primary}
                fontWeight={"bold"}
                sx={{ mb: "5px"}}>
                {title}
            </Typography>
            <Typography
                variant="h5"
                color={colors.green[400]}>
                {subtitle}
            </Typography>
        </Box>
        )
}

export default Header;