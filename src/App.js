import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewAppointment from './components/NewAppointment';
import ListAppointment from './components/ListAppointment'


class App extends Component {
  state = {
    appointment: []
  }

  //When the app starts
  componentDidMount(){
    const appointmentLS = localStorage.getItem('appointment');
    if(appointmentLS){
      this.setState({
        appointment: JSON.parse(appointmentLS)
      })
    }
  }

  //When deleting or adding new appointment
  componentDidUpdate(){
    localStorage.setItem('appointment', JSON.stringify(this.state.appointment));
  }

  //Creating new appointment
  CreateNewAppointment = data => {
    //Copy actual state
    const appointment = [...this.state.appointment, data];
    //Add new state
    this.setState({
      appointment
    })
  }

  //Deleting appointment from state
  DeleteAppointment = id => {
    //Copy State
    const actualAppointments = [...this.state.appointment];
    //Filter by id from array
    const appointment = actualAppointments.filter(appointment => appointment.id !== id)
    //Update state
    this.setState({
      appointment
    })
  }

  render() {
    return (
      <div className='container'>
        <Header
          title = 'Veterinary Admin Panel'
        />
        <div className='row'>
          <div className='col-md-10 mx-auto'>
            <NewAppointment 
              CreateNewAppointment = {this.CreateNewAppointment}
            />
          </div>
          <div className='mt-5 col-md-10 mx-auto'>
            <ListAppointment 
              appointment={this.state.appointment}
              DeleteAppointment={this.DeleteAppointment}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
