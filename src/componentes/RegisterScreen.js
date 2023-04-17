import { useState, useContext } from 'react'
import React from 'react'
import { LoginContext } from './LoginContext'
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
    const { register } = useContext(LoginContext)

    const [values, setValues] = useState({
        email:'',
        password:''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)
    }

  return (
    <div className='login-screen'>
        <div className='login'>
            <h2 className='h2-login'>Registrate</h2>
            <form onSubmit={handleSubmit} className='logear'>
                <input
                onChange={handleInputChange}
                value={values.email}
                type={'text'}
                className='form-inputs'
                placeholder='Tu email'
                name='email'
                />
                <input
                onChange={handleInputChange}
                value={values.password}
                type={'password'}
                className='form-inputs'
                placeholder='Contraseña'
                name='password'
                />
                <button className='enviar-form' type='submit'>Crear usuario</button>
                <Link className='registrar-logear' to='/login'>Ya estoy registrado, Logearme</Link>
            </form>
        </div>
    </div>
  )
}

export default RegisterScreen