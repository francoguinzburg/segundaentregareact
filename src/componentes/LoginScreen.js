import { useState, useContext } from 'react'
import React from 'react'
import { LoginContext } from './LoginContext'
import { Link } from 'react-router-dom';



const LoginScreen = () => {
    const { login, googleLogin } = useContext(LoginContext)

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
        login(values)
    }

  return (
    <div className='login-screen'>
        <div className='login'>
            <h2 className='h2-login'>Login</h2>
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
                <button className='enviar-form' type='submit'>Login</button>
                <Link className='registrar-logear' to='/register'>Registrarme</Link>
            </form>
            <button className='google-logear' onClick={googleLogin}>Logearme con Google</button>
        </div>
    </div>
  )
}

export default LoginScreen