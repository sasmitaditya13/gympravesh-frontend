import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { Segment, Container, Grid, GridColumn, Header, Button, Icon, Popup, GridRow } from 'semantic-ui-react'

import { AppHeader, AppFooter, AppMain, getTheme } from 'formula_one'

import main from 'formula_one/src/css/app.css'
import Entrytable from './table'
import dash from '../css/dashboard.css'

function Datagrid(props) {
    
        return(
            <Grid divided='vertically'>
                                <GridRow columns={2}>
                                <GridColumn>
                                    <div style={{fontSize:48,lineHeight:1}}>
                                        {props.male}
                                    </div>
                                    <div className={dash.opacitytext}>
                                        Male
                                    </div>
                                </GridColumn>
                                <GridColumn>
                                    <div style={{fontSize:48,lineHeight:1}}>
                                        {props.female}
                                    </div>
                                    <div className={dash.opacitytext}>
                                        Female
                                    </div>
                                </GridColumn>
                                </GridRow>

                                <GridRow columns={2}>
                                <GridColumn>
                                    <div style={{fontSize:48,lineHeight:1}}>
                                        {props.ug}
                                    </div>
                                    <div className={dash.opacitytext}>
                                        UG
                                    </div>
                                </GridColumn>
                                <GridColumn>
                                    <div style={{fontSize:48,lineHeight:1}}>
                                        {props.pg}
                                    </div>
                                    <div className={dash.opacitytext}>
                                        PG and Staff
                                    </div>
                                </GridColumn>
                                </GridRow>
                            </Grid>
        )
}

export default Datagrid