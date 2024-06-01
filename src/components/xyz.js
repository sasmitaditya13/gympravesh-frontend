import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MapDispatchToProps, MapStateToProps } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { Segment, Container, Grid, GridColumn, Header, Button, Icon, Popup, GridRow } from 'semantic-ui-react'

import { AppHeader, AppFooter, AppMain, getTheme } from 'formula_one'

import main from 'formula_one/src/css/app.css'
import Entrytable from './table'
import Datagrid from './grid'
import dash from '../css/dashboard.css'
import LineChart from './chart'
import DateTimeForm from './calender'
import { getOccupancy } from '../actions/getOccupancy'

function Dashboard() {
    
    // const totalOccupancy = useSelector(state => state.totalOccupancy)
    // const dispatch = useDispatch();

        return(
        <>
        <div className={dash.header}>
            <div className={dash.logo_container}>
                <img src = "http://localhost:61000/static/gympravesh/assets/logo.svg" style={{height:64}}></img>
                <div className={dash.dashtext}>Dashboard</div>
            </div>
            <div className={dash.signout_container}>
                <div className={dash.hello}>Hello, user_name</div>
                <div className={dash.signout}>
                    Sign out
                </div>
                <Icon name='log out' size='large'></Icon>                    
            </div>
        </div>

        <div className={dash.card}>
            <div className={dash.quantdata}>
                <Grid columns={2}>
                    <GridColumn width={6}>
                        <div className={dash.occupancycard}>
                            <div className={dash.occupancyheader}>Current Occupancy</div>
                            <div className={dash.occupancyheader} style={{fontSize:120, lineHeight:1}}>69</div>
                            <div class="ui center aligned segment Padded-Variation-Class">
                                <Datagrid></Datagrid>
                            </div>
                        </div>
                        <div className={dash.visitscard}>
                            <div className={dash.occupancyheader}>
                                <Icon name='users'></Icon>
                                Total Visits
                            </div>
                            <div className={dash.occupancyheader} style={{fontSize:120, lineHeight:1}}>69</div>
                            <div class="ui center aligned segment Padded-Variation-Class">
                                <Datagrid></Datagrid>
                            </div>
                        </div>
                    </GridColumn>
                    <GridColumn width={10}>
                        <div className={dash.chartscard}>
                            <LineChart></LineChart>
                            <LineChart></LineChart>
                            <DateTimeForm></DateTimeForm>
                            <DateTimeForm></DateTimeForm>
                        </div>
                    </GridColumn>
                </Grid>
            </div>
            <div className={dash.entrylogs}>
                <div className={dash.entryheader}>
                    <Icon name='file alternate outline' size="small"></Icon>
                    <div>Entry Logs</div>
                </div>
                <div className={dash.filterpopup}>
                <Popup
                    content={
                    <>
                        LEFT TO ADD CHECKBOX
                    </>
                    }
                    on='click'
                    position='bottom center'
                    trigger={<Button basic circular>Filter <Icon name='sort down' className={dash.filter}></Icon></Button>}
                />
                </div>
                <Entrytable></Entrytable>
            </div>
        </div>
        </>

        )
    }

export default Dashboard
