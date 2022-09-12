import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { Up } from './Up';

// agragar de donde me conoces 
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
        <div className='p-5 text-center '>
            <form className='form-container' onSubmit={sendEmail}>
            <div className='mb-3 row d-flex-block '>
                <h3 className='form-title'>Enviame tu consulta</h3>
                <label className='text-start p-2'>
                    Nombre:
                    <input className='form-control' type="text" name='name' placeholder='Maria Alejandra' required onChange={handleInputChange} />
                </label>
                <label className='text-start  p-2'>
                    Correo:
                    <input  className='form-control' type="email" name='email' placeholder='correo@gmail.com' required onChange={handleInputChange} />
                </label>
                <div id="emailHelp" className="form-text">Asegurate de escribir correctamente tu dirección de correo</div>
                <label className='text-start  p-2'>
                    Tel:
                    <input  className='form-control' type="tel"  placeholder='1122334455' name='number' required maxLength='10'  onChange={handleInputChange} />
                </label>
                <label className='text-start  p-2'> Asunto
                    <select  className='form-control' name='service' required onChange={handleInputChange}>
                        <option>Limpieza</option>
                        <option>Protesis</option>
                        <option>Control</option>
                        <option>Placa</option>
                    </select>
                </label>
                <label className='text-start  p-2'>
                    Consulta:
                    <input className='form-control ' type="textarea"  required name="text" placeholder='Consulta por servicio'  onChange={handleInputChange} />
                </label>
                <button type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}
