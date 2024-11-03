 
import React from "react"
import Menu from "../components/menu/menu";
import { Outlet } from "react-router-dom";
import { AppBar, Drawer, Toolbar, Typography } from "@mui/material";

const Dashboard  = () =>{

    return (
        <div className="dashboard"> 
         <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
            <Toolbar>
                <Typography variant="h6" noWrap component="div"> Veci</Typography>
            </Toolbar>
         </AppBar>
            <Menu />
            <div className="main">
                <Outlet />
            </div>
        </div>
    ) 

}

export default Dashboard;