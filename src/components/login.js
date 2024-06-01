import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { Segment, Container, Grid, GridColumn, Header, Button, Form, Label } from 'semantic-ui-react'

import { AppHeader, AppFooter, AppMain, getTheme } from 'formula_one'

import main from 'formula_one/src/css/app.css'
import blocks from '../css/app.css'

function Login() {

        return(
            <Grid columns={2} padded id="login-container">
                <GridColumn>
                    <p>IMAGE WILL GO HERE</p>
                </GridColumn>
                <GridColumn className={blocks.column2}>
                    <div className={blocks.headings}>
                        <div className={blocks.head1}>Gym Pravesh</div>
                        <div className={blocks.head2}>Admin Login Page</div>
                    </div>
                    <Form size='large' style={{maxWidth:450}} className={blocks.form}>
                            <label>Username</label>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='' />
                            <label>Password</label>
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder=''
                                type='password'
                            />
                            <div className={blocks.buttongroup}>
                            <Button secondary className={blocks.button} fluid>
                                Login as Admin
                            </Button>
                            <p className={blocks.password}>Forgot password?</p>
                            </div>
                    </Form>
                </GridColumn>
    </Grid>
        )
}

export default Login