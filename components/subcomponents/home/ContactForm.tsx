import { Dispatch, RefObject, SetStateAction } from 'react';
import { useForm } from '../../../hooks/useForm'
import { ISetClass } from '../../../interfaces';

interface ComponentProps {
    formAnim: string;
    refForm: RefObject<HTMLFormElement>;
    Classes: ISetClass
    setClasses: Dispatch<SetStateAction<ISetClass>>
}

export const ContactForm = ({ formAnim, refForm, Classes, setClasses }: ComponentProps) => {

    const [ handleSubmit, form, setForm, IsLoading ] = useForm();

    return (
        <form ref={ refForm } onSubmit={ (e) => handleSubmit( e, Classes, setClasses ) } className={ "container form__box margin2 " + formAnim } >
            <p className="subtitle">Send me a message!</p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="visitor_name" value={ form.name } onChange={ e => setForm({ ...form, name: e.target.value }) } />
            <label htmlFor="mail">Email</label>
            <input type="text" id="mail" name="visitor_email" value={ form.email } onChange={ e => setForm({ ...form, email: e.target.value }) } />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="visitor_message"  cols={30} rows={10} data-width="100%" value={ form.message } onChange={ e => setForm({ ...form, message: e.target.value }) }></textarea>
            <p className="errorMessage">{ form?.errors?.[0] }</p>
            <button type="submit">
                {
                    IsLoading
                        ? 'Submitting...'
                        : 'Submit'
                }
            </button>
        </form>
    )
}
