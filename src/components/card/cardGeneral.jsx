import { Card, CardContent } from "@mui/material"
import React from "react"

export default function CardGeneral({children}) {


    return (
        <Card className="mx50">
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )

}