import React from "react"
import {BrowserRouter as Router, Switch, Route, Link , NavLink} from "react-router-dom"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import PropTypes from "prop-types"
import HelloWorld from "./HelloWorld"
import Apartments from "./Apartments"
import { getApartments } from "../api"

import "bootswatch/dist/flatly/bootstrap.min.css";

class MainApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     apartments: [
      {
        street:"213 What's Up Ave",
        user_id: 1
      },
      {
        street:"123 Made Up Dr",
        user_id: 2 
      },
      {
        street:"123 Made Up Dr",
        user_id: 1    
      }
      ],
        error: null 
      }
  }

  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user_id
    } = this.props

    return (
      <React.Fragment>
        
        <h1>Welcome to the app!</h1>
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
          
        <Router>
          <ul>
            <li><NavLink to="/helloworld">Hello World</NavLink></li>
            <li><NavLink to="/apartments">Apartments</NavLink></li>
            {/* <li><NavLink to="/home">Home</NavLink></li> */}
          </ul>

          <div>
            <Route path='/helloworld' exact component={HelloWorld}/>
            <Route path='/apartments' render={(props) => <Apartments currentUser={current_user_id}/>}/>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default MainApp
