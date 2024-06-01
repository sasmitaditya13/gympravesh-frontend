import { Button, Form, Input, Icon, Message, Grid } from 'semantic-ui-react'
import React,{ Component } from 'react';
import { DateInput, TimeInput } from 'semantic-ui-calendar-react'

  class DateTimeForm extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        date: '',
        time: '',
        dateTime: '',
        datesRange: ''
      };
    }
   
    handleChange = (event, {name, value}) => {
      if (this.state.hasOwnProperty(name)) {
        this.setState({ [name]: value });
      }
    }
   
    render() {
      return (
        <Form>
          <DateInput
            name="date"
            placeholder="Date"
            value={this.state.date}
            iconPosition="left"
            onChange={this.handleChange}
          />
        </Form>
      );
    }
  }


export default DateTimeForm