import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { Segment, Container, Grid, GridColumn, Header, Button, Icon, Table, TableHeader, TableCell, TableRow, TableBody } from 'semantic-ui-react'

import { AppHeader, AppFooter, AppMain, getTheme } from 'formula_one'

import main from 'formula_one/src/css/app.css'
import dash from '../css/dashboard.css'


const tabledata = [
    {id:"1",enrollment:"22323036" , name:"Sasmit", deg:"BS-MS", bhawan:"JB", in:"16:00", out:"---", active:"IN"},
    {id:"2",enrollment:"22323036" , name:"Sasmit", deg:"BS-MS", bhawan:"JB", in:"16:00", out:"---", active:"IN"},
    {id:"3",enrollment:"22323036" , name:"Sasmit", deg:"BS-MS", bhawan:"JB", in:"16:00", out:"---", active:"OUT"},
    {id:"4",enrollment:"22323036" , name:"Sasmit", deg:"BS-MS", bhawan:"JB", in:"16:00", out:"---", active:"IN"},
    {id:"5",enrollment:"22323036" , name:"Sasmit", deg:"BS-MS", bhawan:"JB", in:"16:00", out:"---", active:"IN"}
]

class Entrytable extends Component{
    render()
    {
        return(
            <Table unstackable className={dash.entrytable} class="ui very basic table">
                    <TableBody>
                    {tabledata.map((value, key) => {
                        return (<>
                        {value.active == "IN"?
                        <TableRow positive key={key}>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.enrollment}</TableCell>
                            <TableCell width={8}>{value.name}</TableCell>
                            <TableCell>{value.deg}</TableCell>
                            <TableCell>{value.bhawan}</TableCell>
                            <TableCell>{value.in}</TableCell>
                            <TableCell>{value.out}</TableCell>
                            <TableCell>{value.active}</TableCell>
                        </TableRow>:
                        <TableRow negative key={key}>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.enrollment}</TableCell>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.deg}</TableCell>
                            <TableCell>{value.bhawan}</TableCell>
                            <TableCell>{value.in}</TableCell>
                            <TableCell>{value.out}</TableCell>
                            <TableCell>{value.active}</TableCell>
                        </TableRow>}
                        </>
                        );
                    })}
                    </TableBody>
                </Table>
        )
    }
}

export default Entrytable