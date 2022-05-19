import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useForm = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        errors: [],
    })

    const [IsLoading, setIsLoading] = useState(false);

    const handleSubmit = async(event, Classes, setClasses) => {
        event.preventDefault();

        setIsLoading(true);

        if( form.name.length <= 4 ) {
            setForm({ ...form, errors: [ ...form.errors, "Insert a valid name!"] })
        } else if ( form.email.length <= 6 || !form.email.includes("@") || !form.email.includes(".") ) {
            setForm({ ...form, errors: [ ...form.errors, "Insert a valid email!"] })
        } else if ( form.message.length <= 5 ) {
            setForm({ ...form, errors: [ ...form.errors, "So... what was your message?"] })
        } else {
            setForm({ ...form, errors: [] })
        }

        if( form.errors.length < 0 ) {
            return;
        }

        let answer = await axios({
            method: 'post',
            url: process.env.NEXT_PUBLIC_EMAIL_URL,
            headers: { 'content-type': 'application/json' },
            data: form
        })
        .then( (response) => {
            setIsLoading(false);
            return response.data;
        } );

        if( answer?.ok ) {
            Swal.fire({ icon: 'success', title: 'Success!', text: 'Message sent, I will contact you asap!' })
        } else {
            Swal.fire({ icon: 'error',title: 'Error!', text: 'Something went wrong, please try again!' })
        }

        setClasses({ ...Classes, formAnim: 'form__box-back' });
        
        setForm({
            name: '',
            email: '',
            message:'',
            errors: [],
        })
    }

    return [ handleSubmit, form, setForm, IsLoading, setIsLoading ];

}
