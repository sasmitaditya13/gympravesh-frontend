import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { Segment, Container } from 'semantic-ui-react'

import { AppHeader, AppFooter, AppMain, getTheme } from 'formula_one'

import main from 'formula_one/src/css/app.css'
import blocks from '../css/app.css'
import Login from './login.js'
import Dashboard from './dashboard.js'

class App extends Component {
  render () {
    const creators = [
      {
        name: 'Dhruv Bhanushali',
        role: 'Mentor',
        link: 'https://dhruvkb.github.io/'
      },
      {
        name: 'Praduman Goyal',
        role: 'Frontend developer',
        link: 'https://pradumangoyal.github.io'
      }
    ]

    return (
      <div styleName='main.app'>
        <AppMain>
          <div styleName='main.app-main'>
            <Scrollbars autoHide>
              
              <Dashboard/>
            </Scrollbars>
          </div>
        </AppMain>
        <AppFooter creators={creators} />
      </div>
    )
  }
}

export default connect(
  null,
  null
)(App)
