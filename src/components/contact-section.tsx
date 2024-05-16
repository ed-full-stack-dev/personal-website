import { navigate } from 'gatsby'
import React, { ChangeEvent, FormEvent } from 'react'
import useForm  from '../hooks/use-form'
function ContactSection() {
    const { state, status, handleChange, handleSubmit, disabled } = useForm({ subject: '', name: "", email: "", message: "" })

    return (
        <div className='gradient-background min-h-[600px] flex flex-col items-center'>
            <div className='intro'>
                <h1>Get in Touch</h1>
                <p>Available for Collaboration and Opportunities</p>
            </div>
            <div className="form-wrapper">
                <div className='blob col-span-1'>
                    <h2>Let's Connect!</h2>
                    <p>Drop me a line – I'd love to hear from you.</p>
                </div>
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    className='form'
                    onSubmit={handleSubmit}
                >

                    {status.info.msg && <p className='success'>{status.info.msg}</p>}
                    <div className='form-group'>
                        <label htmlFor='subject'>Subject</label>
                        <input onChange={handleChange} value={state.subject} type='text' id='subject' name='subject' placeholder='Subject' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input onChange={handleChange} value={state.name} type='text' id='name' name='name' placeholder='Your Name' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input onChange={handleChange} value={state.email} type='email' id='email' name='email' placeholder='Your Email' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message'>Message</label>
                        <textarea onChange={handleChange} value={state.message} id='message' name='message' placeholder='Your Message'></textarea>
                    </div>
                    <div className="form-group">
                        <button
                            disabled={disabled}
                            type='submit'
                            className={` ${disabled ? 'disabled' : ''}`}
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactSection


// function encode(data: any) {
//     return Object.keys(data)
//         .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//         .join('&')
// }

