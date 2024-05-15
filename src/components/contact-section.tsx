import React from 'react'

function ContactSection() {
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
                <form className='form'>
                    <div className='form-group'>
                        <label htmlFor='subject'>Subject</label>
                        <input type='text' id='subject' name='subject' placeholder='Subject' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' name='name' placeholder='Your Name' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' placeholder='Your Email' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message' name='message' placeholder='Your Message'></textarea>
                    </div>
                    <div className="form-group">
                        <button type='submit' className='btn'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactSection
