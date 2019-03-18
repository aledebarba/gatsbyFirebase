import React, { Component } from 'react'
import { Link } from 'gatsby'
import fire, { logOut, authListener } from '../config/fire'
import styled from 'styled-components' 

const styledMenu = styled.div`
    display: flex;
    flex-direction: column;
    & a {
        color: white;
        text-decoration: none;
    }
    ${props => props.loggedUser && css`
        color: yellow;
    `}
` 

const defaultMenu = () => (
    <React.Fragment>
        <Link to="/"><a>Index</a></Link>
        <Link to="/page-2/"><a>Page 2</a></Link>
    </React.Fragment>
)

const userMenu = () => (
    <React.Fragment>
            <a onClick={logOut}>Logout</a>
            <Link to="/profile/"><a>Seu perfil</a></Link>
    </React.Fragment>
)


export default class Nav extends Component {

    constructor(props) {
      super(props)
      this.state = {
         user: {}
      }

    }

componentDidMount () {
        let currentUserUID = localStorage.getItem('user')
        if (currentUserUID) { this.setState ( { user: currentUserUID })}
        this.authListener()
 }
  
  render() {
    return (
        <styledMenu>
          <defaultMenuItemns />            
          { this.state.user !== '' ? <userMenu /> : <></> }
        </styledMenu>
    )
  }
}
