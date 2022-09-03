import React from 'react'

export const Form = () => {
    return (
        <div>
            <form className='form-container'>
                <label>
                    Nombre:
                    <input type="text" name="name" />
                </label>
                <label>
                    Correo:
                    <input type="email" name="email" />
                </label>
                <label>
                    Tel:
                    <input type="num" name="name" />
                </label>
                <label>
                    Consulta:
                    <input type="texarea" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
