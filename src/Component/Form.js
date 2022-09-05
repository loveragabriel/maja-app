import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

export const Form = () => {
    const [formData, SetFormData]= useState({
        name:'',
        email:'',
        number: '',
        service: '',
        text:''
    });

    const handleInputChange  =(e)=>{
        SetFormData({
            ...formData,
            [e.target.name]:e.target.value
        })

       

    }

    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_thbluz2','template_6y201bt',e.target,'rMXRUT4nOtufEUTg2')
        .then(response => console.log(response))
        .catch(error=>console.log(error));
        alert('Consulta enviada correctamente')
        e.target.reset();
    }
    

    return (
        <div>
            <form className='form-container' onSubmit={sendEmail}>
                <h3 className='form-title'>Enviame tu consulta</h3>
                <label>
                    Nombre:
                    <input type="text" name='name' placeholder='Maria Alejandra' required onChange={handleInputChange} />
                </label>
                <label>
                    Correo:
                    <input type="email" name='email' placeholder='correo@gmail.com' required onChange={handleInputChange} />
                </label>
                <label>
                    Tel:
                    <input type="tel"  placeholder='1122334455' name='number' required maxLength='10'  onChange={handleInputChange} />
                </label>
                <label> Asunto
                    <select name='service' required onChange={handleInputChange}>
                        <option>Limpieza</option>
                        <option>Protesis</option>
                        <option>Control</option>
                        <option>Placa</option>
                    </select>
                </label>
                <label>
                    Consulta:
                    <input className='text-area' type="textarea"  required name="text" placeholder='Consulta por servicio'  onChange={handleInputChange} />
                </label>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}
