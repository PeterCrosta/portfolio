import React from 'react'
// import {Button} from 'reactstrap'
import emailjs from 'emailjs-com';
import secrets from '../secrets'

class ContactMe extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        emailjs.sendForm('gmail', secrets.templateId, event.target, secrets.userId)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
  }

    render() {
        return (
            <div id='contact-me'>
                <h1 className='header title'>Contact Me</h1>
                <div className='contact-me-container'>
                <form id='contact-form' onSubmit={this.handleSubmit}>
                    <label htmlFor='name' >Name</label>
                    <input type='text' onChange={this.handleChange} name='name' value={this.state.name}/>
                    <label htmlFor='email' >Your email</label>
                    <input type='email' onChange={this.handleChange} name='email' value={this.state.email}/>
                    <label htmlFor='subject' >Subject</label>
                    <input type='text' onChange={this.handleChange} name='subject' value={this.state.subject}/>
                    <label htmlFor='message' >Message</label>
                    <textarea type='text' onChange={this.handleChange} name='message' value={this.state.message}/>
                    <button type='submit'>Send</button>
                </form>
                <div className='post-contact-text'>
                    <div>Or email me directly</div>
                    <a href='mailto:pscrosta@gmail.com'>
                        PSCrosta@gmail.com
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMe