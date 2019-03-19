import React, { Component } from 'react'
import { Link } from 'gatsby'
import { userIsOn, logOut, authListener } from '../config/fire'
import styled from 'styled-components' 

const MainMenu = styled.div`
    display: flex;
    flex-direction: row;
` 

const MenuItem = styled.span` 
    font-size: 20px;
    font-weight: normal;
    padding: 0;
    cursor: pointer;
    margin: 0 10px 0 0 !important;
    color: ${props => props.userIsOff ? "cyan" 
                    : props.userIsOn  ? "yellow" 
                    : "white" };  
`

export default class Nav extends Component {

    constructor(props) {
      super(props)
      this.state = {
         user: {}
      }

    }

componentDidMount () {
        if (userIsOn) { authListener() }
 }
  
  render() {
    return (
        <MainMenu>
            <Link to="/"><MenuItem>Index</MenuItem></Link>
            <Link to="/page-2/"><MenuItem>Page 2</MenuItem></Link>
            { !userIsOn
              ?<Link to="/login/">
                    <MenuItem userIsOff>
                        Login<span role="img" aria-label="yellor locker">🔒</span>
                    </MenuItem>
                </Link>
              :<> 
                <MenuItem onClick={logOut} userIsOn>
                    Logout<span role="img" aria-label="little running man">🏃🏼</span>
                </MenuItem>
                <Link to="/profile/">
                    <MenuItem userIsOn>
                        Seu perfil<span role="img" aria-label="little man chest up using suit and tie">👨‍💼</span>
                    </MenuItem>
                </Link>
               </>
            }
        </MainMenu>
    )
  }
}
