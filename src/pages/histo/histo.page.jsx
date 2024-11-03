
import React, { useEffect, useState } from "react";
import { getTrasactionReport } from "../../services/histo.service";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Container from "../../components/container/container";
import { useAuth } from "../../provider/AuthProvider";

export default function Histo () {
    const {setLoader} = useAuth()
    const [data, setData]  = useState([])

    const init = async () =>{
        setLoader(true);
        let data = await getTrasactionReport();
        setLoader(false);
        setData(data.data)
    }

    useEffect(()=>{
        init();
    }, [])

    return (
        <Container title={"Reporte de transacciones"}>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id transacción</TableCell>
                        <TableCell>Número de telefono</TableCell>
                        <TableCell>Valor</TableCell>
                        <TableCell>Usuario resposable</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(res=>{
                        return (
                            <TableRow>
                                <TableCell>{res.id_trasaccion} </TableCell>
                                <TableCell align="center">{res.telefono} </TableCell>
                                <TableCell align="right">{res.valor} </TableCell>
                                <TableCell align="center">{res.usuario} </TableCell>
                            </TableRow>
                        )
                    })}

                </TableBody>
            </Table>
        </Container>
    )
}