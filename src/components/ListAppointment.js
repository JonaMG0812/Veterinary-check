import React from 'react';
import Appointment from './Appointment';
import PropTypes from 'prop-types';

const ListAppointment = ({appointment, DeleteAppointment}) => {
    //Msg if appo
    const msg = Object.keys(appointment).length === 0 ? 'No appointments yet' : 'Manage the appointments';
        return(
            <div className='card py-5'>
                <div className='card-body'>
                    <h5 className='card-title text-center mb-5'>{msg}</h5>
                    <div className='list-appointment'>
                        {appointment.map(appo => (
                            <Appointment 
                                key={appo.id}
                                appo={appo}
                                DeleteAppointment={DeleteAppointment}
                            />
                        ))}
                    </div>
                </div>
            </div>    
        );
}

ListAppointment.propTypes = {
    appointment : PropTypes.array.isRequired,
    DeleteAppointment : PropTypes.func.isRequired
}

export default ListAppointment;