import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Field, withFormik } from 'formik'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const StyledForm = styled(Form)``;

const StyledField = styled(Field)``;

const SubmitButton = styled.button``

const SignUpForm = props => {
    return (
        <StyledForm>
            <h1>Sign Up</h1>
            <StyledField type='text' name='name' placeholder='Enter name' />
            <StyledField type='text' name='age' placeholder='Enter age' />
            <StyledField type='email' name='email' placeholder='Enter email' />
            <SubmitButton type='submit'>Submit</SubmitButton>
        </StyledForm>
    )
}

const FormikForm = withFormik({

    mapPropsToValues({ name, age, email }) {
        return {
            id: Math.floor(Math.random() * 99999999999999),
            name: name || '',
            age: age || '',
            email: email || ''
        }
    },

    handleSubmit( values, { props, resetForm }) {
        console.log(values);
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', values)
        .then(res => {
            props.addFriend(res.data)
        })
        .catch(err => console.log(err.response))
        resetForm();
    }

})(SignUpForm)

export default FormikForm
