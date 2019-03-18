import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import fire from "../config/fire"
import { navigate } from "gatsby"

export default class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      email: '',
      password: '',
      newuseremail: '',
      newuserpassword: '',
    }
  }

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )
  }

  login = (event) => {
    event.preventDefault()
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(((response) => {
        this.setState({ error: 'usuário logado com sucesso'})
        localStorage.setItem('user', response.user.uid)
        navigate("/")
      }))
      .catch((error) => {
        let errorCode = error.code
        // tratar códigos de erro
        this.setState({
          error: errorCode
        })
    })
  }

  subscribe = (event) => {
    event.preventDefault()
    fire.auth().createUserWithEmailAndPassword(this.state.newuseremail, this.state.newuserpassword)
      .then((response)=> {
        let user = response.user.uid
        localStorage.setItem('user', user)
        this.setState ({ error: 'usuário cadastrado com sucesso' })
      })
      .catch((error) => {
        let errorCode  = error.code
        this.setState ( { error: errorCode })
      })
  }

  render() {
    return (
      <Layout>
        <SEO title="LoginPage" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Login form</h1>
        <p>{this.state.error}</p>
        <div style={{display: "flex", flexDirection: "row"}}>
          <div style={{ margin: 10, padding: 10, border: "1px solid gray", fontFamily: "Arial" }}>
            <p><strong>Login</strong></p>
            <form >
              <div style={{ display: "flex", flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
                <label>email:&nbsp;
          <input value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Digite email cadastrado" required />
                </label>
              </div>
              <div style={{ display: "flex", flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
                <label>Senha:&nbsp;
          <input value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Senha" required />
                </label>
              </div>
              <button type="submit" onClick={this.login}>Login</button>
            </form>
          </div>

          <div style={{ margin: 10, padding: 10, border: "1px solid gray", fontFamily: "Arial" }}>
            <p><strong>Subscribe</strong></p>
            <form >
              <div style={{ display: "flex", flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
                <label>email:&nbsp;
          <input value={this.state.newUserEmail} onChange={this.handleChange} type="email" name="newuseremail" placeholder="Digite um novo email" required />
                </label>
              </div>
              <div style={{ display: "flex", flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
                <label>Senha:&nbsp;
          <input value={this.state.newUserPassword} onChange={this.handleChange} type="password" name="newuserpassword" placeholder="Senha" required />
                </label>
              </div>
              <button type="submit" onClick={this.subscribe}>Subscribe</button>
            </form>
          </div>
        </div>

      </Layout>
    )
  }
}