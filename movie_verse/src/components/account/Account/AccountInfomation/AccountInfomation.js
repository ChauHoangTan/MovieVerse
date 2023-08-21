import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faL } from '@fortawesome/free-solid-svg-icons';
import './AccountInfomation.scss'
import { useSelector } from 'react-redux';

function AccountInfomation() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [ward, setWard] = useState('');

    const [editPersonal, setEditPersonal] = useState(false);
    const [editAddress, setEditAddress] = useState(false);
    const onChange = (e) => {
        const id = e.target.id
        if(id === 'firstName'){
            setFirstName(e.target.value)
        }else if(id === 'lastName'){
            setLastName(e.target.value)
        }else if(id === 'emailAddress'){
            setEmailAddress(e.target.value)
        }else if(id === 'phoneNumber'){
            setPhoneNumber(e.target.value)
        }else if(id === 'country'){
            setCountry(e.target.value)
        }else if(id === 'city'){
            setCity(e.target.value)
        }else if(id === 'district'){
            setDistrict(e.target.value)
        }else{
            setWard(e.target.value)
        }
    }

    const onClickEdit = (name) => {
        if(name === 'personal'){
            if(editPersonal === true){
                setEditPersonal(false)
            }else{
                setEditPersonal(true)
            }
        }else{
            if(editAddress === true){
                setEditAddress(false)
            }else{
                setEditAddress(true)
            }
        }
    }

    const theme = useSelector(state => state.theme.theme)

    return ( 
    <>
        <div className={`accountInfomation ${theme}`}>
                    <div className='mx-3 my-3 fw-bold hightlight'>My Profile
                    <span className='float-end mx-2 fs-6'>ID: 123456789</span></div>
                    <form className='formInfomation'>
                        <div className='personalInfomation '>
                            <div className='fw-bold'>Personal Infomation
                            <span className='border rounded-5 float-end px-3 py-1  text-light'
                                style={{cursor:'pointer'}} onClick={()=>onClickEdit('personal')}>
                                    {editPersonal === true ? 'Save' : 'Edit'}  <FontAwesomeIcon icon={faEdit}/></span>
                            </div>
                            
                            <div className='infomation'>
                                <div>
                                    <input type='text' id='firstName' name='firstName' onChange={onChange} 
                                    readOnly={!editPersonal}
                                    className={`${firstName === '' ? 'empty' : 'notEmpty'}`}/>
                                    <label htmlFor='firstName' className='lblFirstName'>First Name </label> 
                                </div>

                                <div>
                                    <input type='text' id='lastName' name='lastName' onChange={onChange} 
                                    readOnly={!editPersonal}
                                    className={`${lastName === '' ? 'empty' : 'notEmpty'}`}/>
                                    <label htmlFor='lastName' className='lblLastName'>Last Name </label>
                                </div>

                                <div>
                                    <input type='text' id='emailAddress' name='emailAddress' onChange={onChange} 
                                    readOnly={!editPersonal}
                                    className={`${emailAddress === '' ? 'empty' : 'notEmpty'}`}/>
                                    <label htmlFor='emailAddress' className='lblEmailAddress'>Email Address </label>
                                </div>

                                <div>
                                    <input type='text' id='phoneNumber' name='phoneNumber' onChange={onChange} 
                                    readOnly={!editPersonal}
                                    className={`${phoneNumber === '' ? 'empty' : 'notEmpty'}`}/>
                                    <label htmlFor='phoneNumber' className='lblPhoneNumber'>Phone Number </label>
                                </div>
                            </div>
                            
                        </div>

                        <div className='addressInfomation '>
                            <div className='fw-bold'>Address Infomation
                            <span className='border rounded-5 float-end px-3 py-1 text-light'
                                style={{cursor:'pointer'}} onClick={()=>onClickEdit('address')}>
                                    {editAddress === true ? 'Save' : 'Edit'}  <FontAwesomeIcon icon={faEdit}/>
                                    </span></div>
                            <div className='infomation'>
                                <div>
                                    <input type='text' id='country' name='country' onChange={onChange} 
                                    readOnly={!editAddress}
                                    className={`${country === '' ? 'empty' : 'notEmpty'}`}/>
                                    <label htmlFor='country' className='lblCountry'>Country </label>
                                </div>

                                <div>
                                    <input type='text' id='city' name='city' onChange={onChange} 
                                    readOnly={!editAddress}
                                    className={`${city === '' ? 'empty' : 'notEmpty'}`}/>
                                    <label htmlFor='city' className='lblCity'>City </label>
                                </div>

                                <div>
                                    <input type='text' id='district' name='district' onChange={onChange} 
                                    readOnly={!editAddress}
                                    className={`${district === '' ? 'empty' : 'notEmpty'}`}/>
                                    <label htmlFor='district' className='lblDistrict'>District </label>
                                </div>

                                <div>
                                    <input type='text' id='ward' name='ward' onChange={onChange} 
                                    readOnly={!editAddress}
                                    className={`${ward === '' ? 'empty' : 'notEmpty'}`}/>
                                    <label htmlFor='ward' className='lblWard'>Ward </label>
                                </div>
                            </div>
                            
                        </div>
                        
                    </form>
                </div>
    </> );
}

export default AccountInfomation;