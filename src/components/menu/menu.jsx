import  React from "react"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Link } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";
const Menu = ()=> {
    const { logout } = useAuth();
   return (
        <Drawer className="drawer" variant="permanent" anchor="left">
            <Toolbar >
                <h6> Veci</h6>
            </Toolbar>
            <Divider />  
            <Box className={"ofa"}>
            <List>
                <ListItem>
                    <Link to={"/dashboard/buy"}  className="w100">
                        <ListItemButton>
                            <ListItemIcon><AddShoppingCartIcon /></ListItemIcon>
                            <ListItemText primary={"Recarga"} />
                        </ListItemButton>
                    </Link>
                </ListItem> 
                <ListItem>
                    <Link to={"/dashboard/histo"} className="w100">
                        <ListItemButton>
                                <ListItemIcon><SummarizeIcon /></ListItemIcon>
                                <ListItemText primary={"Reporte"} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={()=>{logout()}}>
                            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                            <ListItemText primary={"Salir"} />
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Drawer>
   ) 
}

export default Menu;