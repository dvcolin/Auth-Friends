import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Field, withFormik } from 'formik'
import axios from 'axios'

const StyledForm = styled(Form)``;

const StyledField = styled(Field)``;

const SubmitButton = styled.button``

const LoginForm = props => {
    return (
        <StyledForm>
            <h1>Login</h1>
            <StyledField type='text' name='username' placeholder='Enter username' />
            <StyledField type='password' name='password' placeholder='Enter password' />

            <SubmitButton type='submit'>Submit</SubmitButton>
        </StyledForm>
    )
}

const FormikForm = withFormik({

    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        }
    },

    handleSubmit( values, { props }) {
        console.log(values);
        axios
        .post('http://localhost:5000/api/login', values)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friends');
        })
        .catch(err => console.log(err.response))
    }

})(LoginForm)

export default FormikForm
