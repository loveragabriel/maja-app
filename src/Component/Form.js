import React from 'react'

export const Form = () => {
    return (
        <div>
            <form className='form-container'>
                <h3>Enviame tu consulta</h3>
                <label>
                    Nombre:
                    <input type="text" name="name" placeholder='Maria Alejandra' />
                </label>
                <label>
                    Correo:
                    <input type="email" name="email" placeholder='correo@gmail.com'/>
                </label>
                <label>
                    Tel:
                    <input type="num" name="name" placeholder='011 1111 2222'/>
                </label>
                <label>
                    Consulta:
                    <input className='text-area' type="texarea" name="name" placeholder='Consulta por servicio'/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
