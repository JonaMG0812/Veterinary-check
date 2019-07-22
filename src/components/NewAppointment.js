import React, { Component } from 'react';
import uuid from 'uuid'; //npm install --save uuid
import PropTypes from 'prop-types';

const stateInit = {
    appointment : {
        pet : '',
        owner : '',
        date : '',
        hour : '',
        symptoms : ''
    },
    error: false
}

class NewAppointment extends Component {
    state = { ...stateInit }
     //When the user write in the inputs
     handleChange = (e) => {
         console.log(e.target.name + ': ' + e.target.value);
         //put the text that user write on the state
         this.setState({
             appointment : {
                 ...this.state.appointment,
                 [e.target.name] : e.target.value
             }
         })
     }
     //When the user send the form
     handleSubmit = (e) => {
         e.preventDefault();
         //Recieve state values
         const { pet, owner, date, hour, symptoms } = this.state.appointment;
         //Validating input values
         if(pet === '' || owner === '' || date === '' || hour === '' || symptoms === ''){
             this.setState({
                 error: true
             });
             //Stop execution
             return;
         }
         //Generating obj with data
         const NewAppointment = {...this.state.appointment};
         NewAppointment.id = uuid();

         //Add appointment to the state app
         this.props.CreateNewAppointment(NewAppointment)

         //Set state in stateInit
         this.setState({
             ...stateInit
         })
     }

    render() {
        //Receiving error state
        const {error} = this.state;
        return (
            <div className='card mt-5 py-5'>
                <div className='card-body'>
                    <h5 className='card-title text-center mb-5'>
                        Add Appointment
                    </h5>

                    {error ? <div className='alert alert-danger mt-2 mb-5 text-center'>All fields are required</div> : null }

                    <form
                        onSubmit={this.handleSubmit}
                    >{/* form */}
                        {/* Pet */}
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Pet name:</label>
                            <div className='col-sm-8 col-lg-10'>
                                <input  
                                    type='text'
                                    className='form-control'
                                    placeholder='Pet name'
                                    name='pet'
                                    onChange={this.handleChange}
                                    value={this.state.appointment.pet}
                                />
                            </div>
                        </div>
                        {/* Owner */}
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Owner name:</label>
                            <div className='col-sm-8 col-lg-10'>
                                <input  
                                    type='text'
                                    className='form-control'
                                    placeholder='Owner name'
                                    name='owner'
                                    onChange={this.handleChange}
                                    value={this.state.appointment.owner}
                                />
                            </div>
                        </div>
                        {/* Date */}
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Date:</label>
                            <div className='col-sm-8 col-lg-4'>
                                <input  
                                    type='date'
                                    className='form-control'
                                    name='date'
                                    onChange={this.handleChange}
                                    value={this.state.appointment.date}
                                />
                            </div>
                            {/* Hour */}
                            <label className='col-sm-4 col-lg-2 col-form-label'>Hour:</label>
                            <div className='col-sm-8 col-lg-4'>
                                <input  
                                    type='time'
                                    className='form-control'
                                    name='hour'
                                    onChange={this.handleChange}
                                    value={this.state.appointment.hour}
                                />
                            </div>
                        </div>
                        {/* Symptoms */}
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Symptoms:</label>
                            <div className='col-sm-8 col-lg-10'>
                                <textarea
                                    className='form-control'
                                    placeholder='Describe the symptoms'
                                    name='symptoms'
                                    onChange={this.handleChange}
                                    value={this.state.appointment.symptoms}
                                ></textarea>
                            </div>
                        </div>
                        <input type='submit' className='py-3 mt-2 btn btn-success btn-block' value='Add New Appointment' />
                    </form> {/* form ends */}
                </div>
            </div>
        );
    }
}

NewAppointment.propTypes ={
    CreateNewAppointment: PropTypes.func.isRequired
}

export default NewAppointment;