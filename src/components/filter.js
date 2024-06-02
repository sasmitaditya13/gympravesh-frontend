import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { useEffect } from 'react'
import { Segment, Container, Grid, GridColumn, Header, Button, Icon, Popup, GridRow, Checkbox } from 'semantic-ui-react'
import { func } from 'prop-types'
import { useState } from 'react'

import dash from '../css/dashboard.css'

function FilterOptions(props){

    const [male, setMale] = React.useState(props.filters.entryFilter[0]=="male"?true:false)
    const [female, setFemale] = React.useState(props.filters.entryFilter[1]=="female"?true:false)
    const [ug, setUG] = React.useState(props.filters.entryFilter[2]=="ug"?true:false)
    const [pg, setPG] = React.useState(props.filters.entryFilter[3]=="pg"?true:false)
    var isOpen = false
    var handleOpen = () => {
        isOpen = true
    }

    var handleClose = () => {
        isOpen = false
    } 

    return(
        <><Popup
        content={
        <>
            <Grid columns={2}>
                <GridColumn>
                <Checkbox checked={male} onChange={(e,data) => setMale(data.checked)} label='Male'/>
                <Checkbox checked={ug} onChange={(e,data) => setUG(data.checked)} label='UG'/>
                </GridColumn>
                <GridColumn>
                <Checkbox checked={female} onChange={(e,data) => setFemale(data.checked)} label='female'/>
                <Checkbox checked={pg} onChange={(e,data) => setPG(data.checked)} label='PG'/>
                </GridColumn>
            </Grid>
            <Grid columns='equal'>
                <GridColumn>
                <Button circular basic onClick={handleClose}>Cancel</Button>
                </GridColumn>
                <GridColumn>
                <Button circular>Enter</Button>
                </GridColumn>
            </Grid>
        </>
        }
        on='click'
        open={isOpen}
        onOpen={handleOpen}
        onClose={handleClose}
        position='bottom center'
        trigger={<Button basic circular onClick={handleOpen}>Filter <Icon name='sort down' className={dash.filter}></Icon></Button>}
    />
        </>
    )
}

function mapStateToProps(state) {
    console.log(state)
    return {  filters: state.filters };
}

export default connect(mapStateToProps)(FilterOptions);