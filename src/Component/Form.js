import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

export const Form = () => {
    const [formData, SetFormData]= useState({
        name:'',
        email:'',
        number: '',
        seletOption: '',
        text:''
    });

    const handleInputChange  =(e)=>{
        SetFormData({
            ...formData,
            [e.target.name]:e.target.value

        })

       

    }

    const sendEmail=(e)=>{

        emailjs.sendForm('service_thbluz2','template_6y201bt',e.target,'rMXRUT4nOtufEUTg2')
        .then(response => console.log(response))
        .catch(error=>console.log(error));


        e.preventDefault();
        console.log(formData.name,formData.email)
        alert('Consulta enviada correctamente')
        e.target.reset();
    }
    

    return (
        <div>
            <form className='form-container' onSubmit={sendEmail}>
                <h3>Enviame tu consulta</h3>
                <label>
                    Nombre:
                    <input type="text" name='name' placeholder='Maria Alejandra'  onChange={handleInputChange} />
                </label>
                <label>
                    Correo:
                    <input type="email" name='email' placeholder='correo@gmail.com' onChange={handleInputChange} />
                </label>
                <label>
                    Tel:
                    <input type="tel" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" name='number' maxLength='14' placeholder='011 1111 2222' onChange={handleInputChange} />
                </label>
                <label> Asunto
                    <select name='seletOption' onChange={handleInputChange}>
                        <option>Limpieza</option>
                        <option>Protesis</option>
                        <option>Control</option>
                        <option>Placa</option>
                    </select>
                </label>
                <label>
                    Consulta:
                    <input className='text-area' type="textarea" name="text" placeholder='Consulta por servicio' onChange={handleInputChange} />
                </label>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}
