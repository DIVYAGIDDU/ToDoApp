import React from 'react'
import './Assign.css'
import doctor from './assets/doctor.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'

function Assign() {
    return (
        <div>
            <div className='container'>
                <h4 className='heading text-center'>UPCOMING APPOINTMENTS</h4>
                <div className='row'>
                    <div className='col-md-10'>
                        <div id='chead' className='card-header'>
                            <h5 className="chead-text">New Booking in 2 Minutes</h5>
                            <button className='btn-book'>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <div id='cbody' className='card-body'>
                                <button className='btns-1 btn-cat'>Clinic</button>
                                <button className='btns-1'>Test</button>
                                <button className='btns-1'>Surgery</button>
                                <button className='btns-1'>Medicine</button>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <img className='doctor-img' src={doctor} height='100px' width='100px' alt='No Pic' />
                                    </div>
                                    <div className='col-md-9'>
                                        <div className='apmnt-details'>
                                            <h5>17 September 2021, 9.30 PM</h5>
                                            <h5 className='note'>Appointment with Doctor Arun </h5>
                                            <h5>Doctor World Clinic</h5>
                                        </div>
                                    </div>
                                    <button className='btns-2'>RESCHEDULE</button>
                                    <button className='btns-2'>CANCEL</button>
                                    <button className='btn-view'><FontAwesomeIcon className='eye-icon' icon={faEye} />VIEW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                <div className='col'>
                    <div className='row'>
                        <div id='cbody' className='card-body'>
                            <button className='btns-1 btn-cat'>Clinic</button>
                            <button className='btns-1 btn-cat'>Test</button>
                            <button className='btns-1'>Surgery</button>
                            <button className='btns-1'>Medicine</button>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <img className='doctor-img' src={doctor} height='100px' width='100px' alt='No Pic' />
                                </div>
                                <div className='col-md-9'>
                                    <div className='apmnt-details'>
                                        <h5>17 September 2021, 9.30 PM</h5>
                                        <h5 className='note'>Appointment with Doctor Arun </h5>
                                        <h5>Doctor World Clinic</h5>
                                    </div>
                                </div>
                                <button className='btns-2'>RESCHEDULE</button>
                                <button className='btns-2'>CANCEL</button>
                                <button className='btn-view'><FontAwesomeIcon className='eye-icon' icon={faEye} />VIEW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className='row'>
                    <div className='col'>
                        <button className='btn-back'>BACK</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Assign