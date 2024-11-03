
import { Box, Button, Card, CardContent, Grid2 } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { AUTH } from "../../routes/auth.routes.js";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";
import LockIcon from '@mui/icons-material/Lock';
require("./home.scss");
export default function Home () { 
    const { login, setLoader } = useAuth();
    let navigate = useNavigate();
    const [usuario, setUsuario ] = useState("");
    const [password, setPassword ] = useState("");

    const submit= async () =>{
        try{
            setLoader(true)
            let res = await axios.post(AUTH , {user: usuario, password: password})
            setLoader(false)
            if(res.data.status){

                let { token } = res.data.data
                toast.success("Usuario atenticado");
                login(token ,usuario);
               return navigate("/dashboard")
            }
        }catch(e){
            setLoader(false)
            toast.error("Usuario erroneo");
        }
        
    }

    return (
        <div className="container">

            <div className="container-center">
                <ValidatorForm onSubmit={submit} >
                    <Card>
                        <CardContent>
                    <Grid2 container spacing={2} justifyContent={"center"}>
                        <Grid2 size={12}  className="txc" >
                            <h1><LockIcon />  INICIAR SESIÓN</h1>
                        </Grid2>
                        <Grid2 size={12} >
                            <TextValidator 
                                label={"Usuario"}
                                fullWidth
                                name="usuario"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                floatingLabelText={"Usuario"}
                                validators={["required"]}                            
                                errorMessages={["Este campo es requerido"]}
                            />
                        </Grid2>
                        <Grid2 size={12} >
                            <TextValidator 
                                fullWidth
                                label={"Contraseña"}
                                name="usuario"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                floatingLabelText={"Usuario"}
                                validators={["required"]}                            
                                errorMessages={["Este campo es requerido"]}
                            />
                        </Grid2>
                        <Grid2 size={4} className="txc">
                            <Button fullWidth variant="contained" type="submit">Guardar</Button>
                        </Grid2>
                    </Grid2>
                    </CardContent>
                    </Card>
                </ValidatorForm>
            </div>
        </div>
    )
}