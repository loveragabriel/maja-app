import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { Up } from './Up';

export const Form = () => {
    const [formData, SetFormData] = useState({
        name: '',
        email: '',
        number: '',
        service: '',
        text: ''
    });

    const handleInputChange = (e) => {
        SetFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_thbluz2', 'template_6y201bt', e.target, 'rMXRUT4nOtufEUTg2')
            .then(response => console.log(response))
            .catch(error => console.log(error));
        alert('Consulta enviada correctamente')
        e.target.reset();
    }
    return (
        <div className='p-4 text-center  text-dark '>
            <form className='form-container ' onSubmit={sendEmail}>
                <div className='mb-3 row d-flex-block  bg-light rounded opacity-85 form-cont'>
                    <label className='text-start p-2 text-dark'>
                        Nombre:
                        <input className='' type="text" name='name' placeholder='María Alejandra' required onChange={handleInputChange} />
                    </label>
                    <label className='text-start  p-2'>
                        Correo:
                        <input className='' type="email" name='email' placeholder='correo@gmail.com' required onChange={handleInputChange} />
                    </label>
                    <div id="emailHelp" className="form-text">Verifique su dirección de correo</div>
                    <label className='text-start  p-2'>
                        Teléfono:
                        <input className='border-none' type="tel" placeholder='1122334455' name='number' required maxLength='10' onChange={handleInputChange} />
                    </label>
                    <label className='text-start  p-2'> Asunto:
                        <select className='' name='service' required onChange={handleInputChange}>
                            <option value="" disabled selected hidden>Selecciona un tratamiento...</option>
                            <option>Arreglos</option>
                            <option>Caries</option>
                            <option>Limpieza</option>
                            <option>Prótesis</option>
                            <option>Placas Miorrelajantes</option>
                        </select>
                    </label>
                    <label className='text-start  p-2'>
                        De dónde me conoces:
                        <input className=' ' type="text" name="text" placeholder='Referido/a' onChange={handleInputChange} />
                    </label>
                    <label form='' className='text-start  p-2 '>
                        Consulta:
                        <textarea className=' text-area ' type="textarea" rows={5} cols={5} required name="text" placeholder='Consulta por un Tratamiento' onChange={handleInputChange} />
                    </label>
                    <div className='text-center'>
                        <button className='btn btn-dark w-50 m-2' type='submit'>Enviar</button>
                    </div>
                </div>
            </form>
            <Up></Up>
        </div>
    )
}
