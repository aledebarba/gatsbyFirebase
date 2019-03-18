import React, { Component } from 'react'

export default class ProfileForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            celphone: '',
            company: '',
            title: '',
            othercontact: ''
        }
    }

    handleChange = (e) => {
        let newState = {}

        newState[e.target.name] = e.target.value

        this.setState(newState)
    }

    handleSubmit = (e) => {
        console.log(this.state)
        e.preventDefault();
    }

    render() {
        return (
            <form>
                <label>
                    <input name="name" 
                           value={this.state.name} 
                           type="text" 
                           placeholder="Digite seu nome" 
                           onChange={this.handleChange} />
                </label>
                <label>
                    <input name="email" 
                           value={this.state.email} 
                           type="email" 
                           placeholder="Digite seu email" 
                           onChange={this.handleChange} />
                </label>
                <label>
                    <input name="celphone" 
                           value={this.state.celphone} 
                           type="text" 
                           placeholder="(99) 9999-9999" 
                           pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$"
                            onChange={this.handleChange} />
                </label>
                <label>
                    <input name="company" 
                           value={this.state.company} 
                           type="text" 
                           placeholder="Digite o nome da empresa" 
                           onChange={this.handleChange} />
                </label>
                <label>
                    <input name="title" 
                           value={this.state.title} 
                           type="text"
                           placeholder="Digite seu cargo" 
                           onChange={this.handleChange} />
                </label>
                <label>
                    <input name="onthercontact" 
                           value={this.state.othercontact} 
                           type="text" 
                           placeholder="Outro contato *qualquer*" 
                           onChange={this.handleChange} />
                </label>
                <button onClick={this.handleSubmit}>Gravar os dados</button>
            </form>
        )
    }
}
