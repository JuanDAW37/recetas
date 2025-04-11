import React, { useEffect, useState } from "react";

const initialForm = {
    nombre:""
}

export const Form = ({QueryData}) => {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (form.nombre) {
            setForm(form);
        }else{
            setForm(initialForm);
        }      
    }, [form])
    
    const handleChange = (e:any) => {
        setForm({...form, [e.target.name]:e.target.value});        
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (!form.nombre) {
            alert('Datos incompletos');
            return;
        } else {
            QueryData(form);            
        }
    }

    return(
        <>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Plato</label>
                <input type="text" name="nombre" id="nombre" onChange={handleChange} value={form.nombre} placeholder="Plato..." />
                <input type="submit" value="Buscar" />
            </form>
        </>
    )
}
