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

        let listOfErrors = [];

        const { name, email, message, errors } = form;

        if(name.length <= 4) listOfErrors.push("Insert a valid name");

        if(
            email.length <= 6 ||
            !email.includes("@") ||
            !email.includes(".")
        ) {
            listOfErrors.push("Insert a valid email!")
        }

        if(message.length <= 5) listOfErrors.push("Message should be bigger than 5 chars");

        if(listOfErrors.length > 0){
            setForm({
                ...form,
                errors: listOfErrors
            });
            return;
        };

        setIsLoading(true);

        let answer = await axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/mail`,
            headers: { 'content-type': 'application/json' },
            data: form
        })
        .then( (response) => {
            setIsLoading(false);
            return response.data;
        } );

        if( answer?.ok ) {
            Swal.fire({ 
                icon: 'success', 
                title: 'Success!', 
                text: 'Message sent, I will contact you asap!' 
            })
        } else {
            Swal.fire({ 
                icon: 'error',
                title: 'Error!', 
                text: 'Something went wrong, please try again!' 
            })
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
