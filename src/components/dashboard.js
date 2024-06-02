import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { useEffect } from 'react'
import { Segment, Container, Grid, GridColumn, Header, Button, Icon, Popup, GridRow } from 'semantic-ui-react'
import axios from "axios"

import { AppHeader, AppFooter, AppMain, getTheme } from 'formula_one'

import main from 'formula_one/src/css/app.css'
import Entrytable from './table'
import Datagrid from './grid'
import dash from '../css/dashboard.css'
import LineChart from './chart'
import DateTimeForm from './calender'
import { getOccupancy } from '../actions/getOccupancy'
import { getEntry } from '../actions/getEntrylog'
import { getCharts } from '../actions/getCharts'
import { whoami } from '../urls'
import FilterOptions from './filter'

function Dashboard(props) {
        useEffect(() => {
            axios.get(`${whoami()}`)
            props.getOccupancy("2f626ee5-5e0e-4b24-b43e-78cf88df441c")
            props.getEntry("2f626ee5-5e0e-4b24-b43e-78cf88df441c")
            props.getCharts("2f626ee5-5e0e-4b24-b43e-78cf88df441c")
        },[])
        return(
        <>
        <div className={dash.header}>
            <div className={dash.logo_container}>
                <img src = "http://localhost:61000/static/gympravesh/assets/logo.svg" style={{height:64}}></img>
                <div className={dash.dashtext}>Gym Pravesh</div>
            </div>
            <div className={dash.signout_container}>
                <div className={dash.signout}>
                    Sign out
                </div>
                <Icon name='log out' size='large'></Icon>                    
            </div>
        </div>
        <div className={dash.hello}>
        <div className={dash.dashboard}>Dashboard</div>
        <div className={dash.username}>Hello, username</div>
        </div>    
        <div className={dash.card}>
            <div className={dash.quantdata}>
                <Grid columns={2}>
                    <GridColumn width={6}>
                        <div className={dash.occupancycard}>
                            <div className={dash.occupancyheader}>Current Occupancy</div>
                            <div className={dash.occupancyheader} style={{fontSize:105, lineHeight:1, marginBottom:32}}>{props.getdata.data.total_occupancy}</div>
                            <div class="ui center aligned segment Padded-Variation-Class">
                                <Datagrid 
                                total = {props.getdata.data.total_occupancy} 
                                male = {props.getdata.data.male_occupancy}
                                female = {props.getdata.data.female_occupancy}
                                ug = {props.getdata.data.ug_occupancy}
                                pg = {props.getdata.data.pg_staff_occupancy}></Datagrid>
                            </div>
                        </div>
                        <div className={dash.visitscard}>
                            <div className={dash.occupancyheader}>
                                <Icon name='users'></Icon>
                                Total Visits
                            </div>
                            <div className={dash.occupancyheader} style={{fontSize:120, lineHeight:1}}>{props.getdata.data.daily_visits.total_visits}</div>
                            <div class="ui center aligned segment Padded-Variation-Class">
                                <Datagrid
                                total = {props.getdata.data.daily_visits.total_visits}
                                male = {props.getdata.data.daily_visits.male_visits}
                                female = {props.getdata.data.daily_visits.female_visits}
                                ug = {props.getdata.data.daily_visits.ug_visits}
                                pg = {props.getdata.data.daily_visits.pg_staff_visits}
                                ></Datagrid>
                            </div>
                        </div>
                    </GridColumn>
                    <GridColumn width={10}>
                        <div className={dash.chartscard}>
                            <div className={dash.timeheader}>
                            <div className={dash.timedistribution}><Icon name='chart bar'></Icon>Time Distribution</div>
                            
                            </div>
                            <div className={dash.daytime}>Morning</div>
                            <div className={dash.occupancyopacity}>Occupany</div>
                            <LineChart ugdata = {props.getchart.male.morning.ug} pgdata={props.getchart.male.morning.pg} label={props.getchart.morningLabel}></LineChart>
                            <div className={dash.daytime}>Evening</div>
                            <div className={dash.occupancyopacity}>Occupancy</div>
                            <LineChart ugdata = {props.getchart.male.evening.ug} pgdata={props.getchart.male.evening.pg} label={props.getchart.eveningLabel}></LineChart>
                            <div style={{marginTop:48}}>
                            <Grid columns='equal'>
                                <GridColumn>
                                    <Segment raised>
                                        <div> Peak Occupancy hour</div>
                                        <div className={dash.mostleast}>
                                            <div className={dash.occupancyopacity}>Morning</div>
                                            <div>9AM - 10AM</div>
                                        </div>
                                        <div className={dash.mostleast}>
                                            <div className={dash.occupancyopacity}>Morning</div>
                                            <div>9AM - 10AM</div>
                                        </div>
                                    </Segment>
                                </GridColumn>
                                <GridColumn>
                                    <Segment raised>
                                        <div> Peak Occupancy hour</div>
                                        <div className={dash.mostleast}>
                                            <div className={dash.occupancyopacity}>Morning</div>
                                            <div>9AM - 10AM</div>
                                        </div>
                                        <div className={dash.mostleast}>
                                            <div className={dash.occupancyopacity}>Morning</div>
                                            <div>9AM - 10AM</div>
                                        </div>
                                    </Segment>
                                </GridColumn>
                            </Grid>
                            </div>
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
                <FilterOptions></FilterOptions>
                </div>
                <Entrytable></Entrytable>
            </div>
        </div>
        </>

        )
    }

function mapStateToProps(state) {
    return {  getdata: state.getdata, getLog: state.getLog, getchart: state.getchart };
} 

const mapDispatchToProps = dispatch => {
    return {
      getOccupancy: (token) => {
        dispatch(getOccupancy(token))
      },
      getEntry: (token) => {
        dispatch(getEntry(token))
      },
      getCharts: (token) =>{
        dispatch(getCharts(token))
      }
    }
}

  export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
