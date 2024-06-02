import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { Segment, Container, Grid, GridColumn, Header, Button, Icon, Table, TableHeader, TableCell, TableRow, TableBody } from 'semantic-ui-react'

import { AppHeader, AppFooter, AppMain, getTheme } from 'formula_one'

import main from 'formula_one/src/css/app.css'
import dash from '../css/dashboard.css'

function Entrytable(props) {
        return(
            <Table unstackable className={dash.entrytable} class="ui very basic table">
                    <TableBody>
                    {props.getLog.data.map((value, key) => {
                        return (<>
                        {value.active == "IN"?
                        <TableRow positive key={key}>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.enrollment}</TableCell>
                            <TableCell width={8}>{value.name}</TableCell>
                            <TableCell>{value.deg}</TableCell>
                            <TableCell>{value.bhawan}</TableCell>
                            <TableCell>{value.entry}</TableCell>
                            <TableCell>{value.exit}</TableCell>
                            <TableCell>{value.active}</TableCell>
                        </TableRow>:
                        <TableRow negative key={key}>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.enrollment}</TableCell>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.deg}</TableCell>
                            <TableCell>{value.bhawan}</TableCell>
                            <TableCell>{value.entry}</TableCell>
                            <TableCell>{value.exit}</TableCell>
                            <TableCell>{value.active}</TableCell>
                        </TableRow>}
                        </>
                        );
                    })}
                    </TableBody>
                </Table>
        )
    }

function mapStateToProps(state) {
    return { getLog: state.getLog };
} 

export default connect(mapStateToProps)(Entrytable)