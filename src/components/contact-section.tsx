import { navigate } from 'gatsby'
import React from 'react'

function ContactSection() {
    const [state, setState] = React.useState({})
    const handleChange = (e: any) => {
        setState({ ...state, [e.target.name]: e.target.value })
      }
      const handleSubmit = (e:any) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': form.getAttribute('name'),
            ...state,
          }),
        })
          .then(() => navigate(form.getAttribute('action')))
          .catch((error) => alert(error))
      }
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
                >
                    <label>
                        Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                    </label>


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


function encode(data: any) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  
