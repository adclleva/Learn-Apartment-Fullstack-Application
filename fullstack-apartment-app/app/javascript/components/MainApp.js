import React from "react"
import PropTypes from "prop-types"
import HelloWorld from "./HelloWorld"
import "bootswatch/dist/flatly/bootstrap.min.css";

class MainApp extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <React.Fragment>
        <HelloWorld />
        
        <h1>Welcome to the app!</h1>
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In Test</a>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default MainApp
