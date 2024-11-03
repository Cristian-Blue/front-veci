
import React, { useEffect, useState } from "react";
import { SelectValidator, TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { postBuy } from "./buy.service";
import CardGeneral from "../../components/card/cardGeneral";
import { Button, Grid2, MenuItem } from "@mui/material";
import { getSuppliers } from "../../services/suppliers.service.js";
import { useAuth } from "../../provider/AuthProvider.jsx";
import DialogGeneral from "../../components/information/DialogInfo.jsx";
import Container from "../../components/container/container.jsx";
 

export default function Buy () {
    const { user , setLoader } = useAuth();
    const [open, setOpen] = useState(false); 
    const [dataOperation, setDataOperation] = useState({cellPhone: "",message : "",transactionalID: "",value: ""})

    const [supplier , setSupplier ] = useState([]);
    const [form, setForm] = useState({
       cellPhone: '' , 
       value : 0,
       supplierId : '',
       user: user
    });
    
    const handleChange = (e) =>{
        setForm(prev =>   ({...prev , [e.target.name] : e.target.value}) )
    }

    const submit = async () =>{
        setLoader(true)
        let res = await postBuy(form);
        setLoader(false)
        if(res.status){
            setForm({cellPhone: '' , value : 0,supplierId : '',user: user})
            setDataOperation(res.data);
            setOpen(true)
        }
     
    }

    const onClose = () =>{
        setOpen(false)
        setDataOperation({cellPhone: "",message : "",transactionalID: "",value: ""})
    }

    const init = async ()=>{
        setLoader(true)
        let res = await getSuppliers();
        setLoader(false)
        setSupplier(res.data)
    }

    useEffect(()=>{
        init();
    }, [])

    return (
        <Container title={"Recarga"}>
            <CardGeneral>
                <ValidatorForm onSubmit={submit}>
                    <Grid2 container spacing={2}>
                        <Grid2 size={12}>
                            <TextValidator 
                                name="cellPhone"
                                value={form.cellPhone}
                                label={"Número de telefono"}
                                fullWidth 
                                onChange={handleChange}
                                validators={["required", "matchRegexp:^3\\d{9}$"]}                            
                                errorMessages={["Este campo es requerido" ,"El número debe ser colombiano"]}
                            />
                        </Grid2>
                        <Grid2 size={12}>
                            <TextValidator 
                                name="value" 
                                value={form.value}
                                label={"Monto"}
                                fullWidth 
                                onChange={handleChange}
                                validators={["required", "minNumber:1000", "maxNumber:100000", 'matchRegexp:^[0-9]+$']}                            
                                errorMessages={["Este campo es requerido" ,"Valor mínimo 1000", "Valor máximo 100000", "Solo números"]}
                            />
                        </Grid2>
                        <Grid2 size={12}>
                            <SelectValidator
                                name="supplierId"
                                value={form.supplierId}
                                label={"Proveedor de recarga"}
                                fullWidth 
                                onChange={handleChange}
                                validators={["required" ]}                            
                                errorMessages={["Este campo es requerido" ]}
                            >   
                                <MenuItem value=''>Seleccione</MenuItem>
                                {supplier.map(res=>{
                                    return (<MenuItem value={res.id} key={`${res.id}-suppplier`} > {res.name} </MenuItem>)
                                })}
                                                            
                            </SelectValidator>
                        </Grid2>
                        <Grid2 size={2}>
                            <Button type="submit" fullWidth variant="contained">Recargar</Button>
                        </Grid2>
                    </Grid2>    
                </ValidatorForm>    
                <DialogGeneral  
                    open={open}
                    onClose={onClose}
                    info={dataOperation}
                />
            </CardGeneral>
        </Container>
    )
}