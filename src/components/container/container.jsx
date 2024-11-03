import { Box } from "@mui/material";
import React from "react";

export default function Container ({children , title}) {

    return (
        <Box>
            <h2>{title}</h2>
            {children}
        </Box>
    );

}