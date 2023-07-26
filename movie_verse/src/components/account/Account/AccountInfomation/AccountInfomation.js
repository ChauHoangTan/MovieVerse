import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import './AccountInfomation.scss'

function AccountInfomation() {
    return ( 
    <>
        <div className='accountInfomation'>
                    <div className='mx-3 my-3 fw-bold fs-5'>My Profile
                    <span className='float-end mx-2 fs-6'>ID: 123456789</span></div>
                    <form className='formInfomation'>
                        <div className='personalInfomation '>
                            <div className='fw-bold'>Personal Infomation
                            <span className='border rounded-5 float-end px-3 py-1  text-light'>Edit  <FontAwesomeIcon icon={faEdit}/></span>
                            </div>
                            
                            <div className='infomation'>
                                <div>
                                    <label htmlFor='firstName'>First Name: </label>
                                    <br/>
                                    <input type='text' placeholder='First Name...' id='firstName' name='firstName' />
                                </div>

                                <div>
                                    <label htmlFor='lastName'>Last Name: </label>
                                    <br/>
                                    <input type='text' placeholder='Last Name...' id='lastName' name='lastName' />
                                </div>

                                <div>
                                    <label htmlFor='emailAddress'>Email Address: </label>
                                    <br/>
                                    <input type='text' placeholder='Email Address...' id='emailAddress' name='emailAddress' />
                                </div>

                                <div>
                                    <label htmlFor='phoneNumber'>Phone Number: </label>
                                    <br/>
                                    <input type='text' placeholder='Phone Number...' id='phoneNumber' name='phoneNumber' />
                                </div>
                            </div>
                            
                        </div>

                        <div className='addressInfomation '>
                            <div className='fw-bold'>Address Infomation
                            <span className='border rounded-5 float-end px-3 py-1 text-light'>Edit  <FontAwesomeIcon icon={faEdit}/></span></div>
                            <div className='infomation'>
                                <div>
                                    <label htmlFor='country'>Country: </label>
                                    <br/>
                                    <input type='text' placeholder='Country...' id='country' name='country' />
                                </div>

                                <div>
                                    <label htmlFor='city'>City: </label>
                                    <br/>
                                    <input type='text' placeholder='City...' id='city' name='city' />
                                </div>

                                <div>
                                    <label htmlFor='district'>District: </label>
                                    <br/>
                                    <input type='text' placeholder='District...' id='district' name='district' />
                                </div>

                                <div>
                                    <label htmlFor='ward'>Ward: </label>
                                    <br/>
                                    <input type='text' placeholder='Ward...' id='ward' name='ward' />
                                </div>
                            </div>
                            
                        </div>
                        
                    </form>
                </div>
    </> );
}

export default AccountInfomation;