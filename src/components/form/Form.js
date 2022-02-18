import './Form.css';
import React, {useState} from "react";
import { Modal } from 'semantic-ui-react';


function Form({nombre}) {
    const [form, setForm] = useState({
        nombreCompleto: '',
        email: '',
        celular: '',
        edad: '',
        statusNombre: '',
        statusEmail: '',
        statusCelular: '',
        statusEdad: '',
        statusEnvio: false,
        param: ''
    });

    const handleChangeNombre = e => {
        
        let values = e.target.value;

        let formatoNombre = /([A-Z][a-zA-Z]*)/;

        if (formatoNombre.test(values)) {
            setForm({ ...form, statusNombre: "ok", nombreCompleto: e.target.value })
        } else {
            setForm({ ...form, statusNombre: "incorrect", nombreCompleto: e.target.value })
        }

    }

    const handleChangeEmail = e => {
        
        let values = e.target.value;

        let emailFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (emailFormat.test(values)) {
            setForm({ ...form, statusEmail: "ok", email: e.target.value })
        } else {
            setForm({ ...form, statusEmail: "incorrect", email: e.target.value })
        }

    }

    const handleChangeCelular = e => {
        
        let values = e.target.value;

        let formatoCelular = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;

        if (formatoCelular.test(values)) {
            setForm({ ...form, statusCelular: "ok", celular: e.target.value })
        } else {
            setForm({ ...form, statusCelular: "incorrect", celular: e.target.value })
        }

    }

    const handleChangeEdad = e => {
        
        let values = e.target.value;

        if (values >= 18 && values <= 100) {
            setForm({ ...form, statusEdad: "ok", edad: e.target.value })
        } else {
            setForm({ ...form, statusEdad: "incorrect", edad: e.target.value })
        }

    }

    const handleSubmit = e => {
        console.log('Datos del formulario', form);

        document.getElementsByTagName("input")[0].value = "";
        document.getElementsByTagName("input")[1].value = "";
        document.getElementsByTagName("input")[2].value = "";
        document.getElementsByTagName("input")[3].value = "";

        setForm({ ...form, statusEnvio: true})

        setTimeout(function(){
            setForm({ ...form, statusEnvio: false})
        },5000);
    }

    

    let info ="temp"

    return (
        <div className='form-container'>
            <div id="msg" class="ui segment">
                <h3>
                    Hola, bienvenido, sabemos que quieres viajar en {nombre}, por favor
                    diligencia el siguiente formulario
                </h3>
            </div>

            <div id="form" class="ui form">
                
                <div class="field">
                    <div class="eighteen wide field">
                        <p className='label'>Nombre completo</p>
                        <input type="text" name="nombreCompleto" onChange={handleChangeNombre}/>
                        {
                            form.statusNombre === "incorrect" ? <p className='warning'>Nombre Invalido</p> :
                            form.statusNombre === "" ? <p className='warning'>*Campo requerido</p> :
                            <></>
                        }
                    </div>
                </div>

                <div class="fields">
                    <div class="seven wide field">
                        <p className='label'>Email</p>
                        <input type="email" name="email" onChange={handleChangeEmail}/>
                        {
                            form.statusEmail === "incorrect" ? <p className='warning'>Invalid email</p> :
                            form.statusEmail === "" ? <p className='warning'>*Campo requerido</p> :
                            <></>
                        }
                    </div>

                    <div class="six wide field">
                        <p className='label'>Celular</p>
                        <input type="text" name="celular" onChange={handleChangeCelular}/>
                        {
                            form.statusCelular === "incorrect" ? <p className='warning'>Celular invalido</p> :
                            form.statusCelular === "" ? <p className='warning'>*Campo requerido</p> :
                            <></>
                        }
                    </div>

        
                    <div class="seven wide field">
                        <p className='label'>Edad</p>
                        <input type="number" name="edad" onChange={handleChangeEdad}/>
                        {
                            form.statusEdad === "incorrect" ? <p className='warning'>El usuario debe ser mayor de 18 años y menor de 100 años</p> :
                            form.statusEdad === "" ? <p className='warning'>*Campo requerido</p> :
                            <></>
                        }
                    </div>
                </div>
                
                {
                    (form.statusNombre === "ok" && form.statusEmail === "ok" && form.statusCelular === "ok" && form.statusEdad === "ok") ? 
                    <button id="enviar" class="fluid ui yellow button" type="submit" onClick={handleSubmit}>Enviar</button>:
                    <button id="enviar" class="fluid ui yellow button" type="submit" disabled>Enviar</button>
                }

            </div>

            <Modal
            open={form.statusEnvio}
            header='Tu información fue enviada con éxito, estaremos en contacto
            contigo!'
          />
        </div>
    );
  }
  
  export default Form;