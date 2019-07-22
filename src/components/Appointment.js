import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appo, DeleteAppointment}) => (
  <div className='media mt-3'>
      <div className='media-body'>
            <p className='card-text'><span>Pet name:</span> {appo.pet}</p>
            <p className='card-text'><span>Owner name:</span> {appo.owner}</p>
            <p className='card-text'><span>Date:</span> {appo.date}</p>
            <p className='card-text'><span>Hour:</span> {appo.hour}</p>
            <p className='card-text'><span>Symptoms:</span></p>
            <p className='card-text'>{appo.symptoms}</p>
            <button
                className='btn btn-danger'
                onClick={ () => DeleteAppointment(appo.id) }
            >Delete Appointment &times;</button>
      </div>
  </div>  
);

Appointment.propTypes = {
    appo : PropTypes.object.isRequired,
    DeleteAppointment : PropTypes.func.isRequired
}

export default Appointment;