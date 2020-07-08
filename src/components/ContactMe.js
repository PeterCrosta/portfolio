import React from 'react'
import {Button} from 'reactstrap'
import emailjs from 'emailjs-com';

class ContactMe extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'fake name',
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
        console.log(this.state)
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

    render() {
        return (
            <div id='contact-me'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name" >Name</label>
                    <input type="text" onChange={this.handleChange} name="name" value={this.state.name}/>
                    <label htmlFor="email" >Your email</label>
                    <input type="text" onChange={this.handleChange} name="email" value={this.state.email}/>
                    <label htmlFor="subject" >Subject</label>
                    <input type="text" onChange={this.handleChange} name="subject" value={this.state.subject}/>
                    <label htmlFor="message" >Message</label>
                    <textarea type="text" onChange={this.handleChange} name="message" value={this.state.message}/>
                    <Button color="danger" type="submit">Danger, working?</Button>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}

export default ContactMe