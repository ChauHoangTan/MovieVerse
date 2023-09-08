import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faL } from '@fortawesome/free-solid-svg-icons';
import './AccountInfomation.scss'
import { useSelector } from 'react-redux';
import axios from 'axios';

function AccountInfomation() {

    const [fullName, setFullName] = useState('');
    const [career, setCareer] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [ward, setWard] = useState('');

    const [editPersonal, setEditPersonal] = useState(false);
    const [editAddress, setEditAddress] = useState(false);

    const token = sessionStorage.getItem('token')
    const headers = {
        Authorization: `Bearer ${token}`,
      };

    const getInfoFromAPI = async() => {
        const response = await axios.get('http://localhost:4000/account/info', {headers})
        const result = response.data
        if(result.fullName !== undefined){
            setFullName(result.fullName)
        }
        if(result.career !== undefined){
            setCareer(result.career)
        }
        if(result.emailAddress !== undefined){
            setEmailAddress(result.emailAddress)
        }
        if(result.phoneNumber !== undefined){
            setPhoneNumber(result.phoneNumber)
        }
        if(result.country !== undefined){
            setCountry(result.country)
        }
        if(result.city !== undefined){
            setFullName(result.city)
        }
        if(result.district !== undefined){
            setDistrict(result.district)
        }
        if(result.ward !== undefined){
            setWard(result.ward)
        }

    }

    useEffect(() => {
        getInfoFromAPI()

    },[])

    const onChange = (e) => {
        const id = e.target.id
        if(id === 'fullName'){
            setFullName(e.target.value)
        }else if(id === 'career'){
            setCareer(e.target.value)
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

        const updateInfoDataForDB = async (obj) => {
            const response = await axios.put('http://localhost:4000/account/update',obj)
        }
        if(name === 'personal'){
            if(editPersonal === true){
                setEditPersonal(false)
                updateInfoDataForDB({
                    token: sessionStorage.getItem('token'),
                    data: {
                        fullName: fullName,
                        career: career,
                        emailAddress: emailAddress,
                        phoneNumber: phoneNumber
                    }
                    
                })
            }else{
                setEditPersonal(true)
            }
        }else{
            if(editAddress === true){
                setEditAddress(false)
                updateInfoDataForDB({
                    country: country,
                    city: city,
                    district: district,
                    ward: ward
                })
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
                                    <input type='text' id='fullName' name='fullName' onChange={onChange} 
                                    readOnly={!editPersonal}
                                    className={`${fullName === '' ? 'empty' : 'notEmpty'}`}
                                    value={fullName}/>
                                    <label htmlFor='fullName' className='lblFullName'>Full Name </label> 
                                </div>

                                <div>
                                    <input type='text' id='career' name='career' onChange={onChange} 
                                    readOnly={!editPersonal}
                                    className={`${career === '' ? 'empty' : 'notEmpty'}`}
                                    value={career}/>
                                    <label htmlFor='career' className='lblCareer'>Career </label>
                                </div>

                                <div>
                                    <input type='text' id='emailAddress' name='emailAddress' onChange={onChange} 
                                    readOnly={!editPersonal}
                                    className={`${emailAddress === '' ? 'empty' : 'notEmpty'}`}
                                    value={emailAddress}/>
                                    <label htmlFor='emailAddress' className='lblEmailAddress'>Email Address </label>
                                </div>

                                <div>
                                    <input type='text' id='phoneNumber' name='phoneNumber' onChange={onChange} 
                                    readOnly={!editPersonal}
                                    className={`${phoneNumber === '' ? 'empty' : 'notEmpty'}`}
                                    value={phoneNumber}/>
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
                                    className={`${country === '' ? 'empty' : 'notEmpty'}`}
                                    value={country}/>
                                    <label htmlFor='country' className='lblCountry'>Country </label>
                                </div>

                                <div>
                                    <input type='text' id='city' name='city' onChange={onChange} 
                                    readOnly={!editAddress}
                                    className={`${city === '' ? 'empty' : 'notEmpty'}`}
                                    value={city}/>
                                    <label htmlFor='city' className='lblCity'>City </label>
                                </div>

                                <div>
                                    <input type='text' id='district' name='district' onChange={onChange} 
                                    readOnly={!editAddress}
                                    className={`${district === '' ? 'empty' : 'notEmpty'}`}
                                    value={district}/>
                                    <label htmlFor='district' className='lblDistrict'>District </label>
                                </div>

                                <div>
                                    <input type='text' id='ward' name='ward' onChange={onChange} 
                                    readOnly={!editAddress}
                                    className={`${ward === '' ? 'empty' : 'notEmpty'}`}
                                    value={ward}/>
                                    <label htmlFor='ward' className='lblWard'>Ward </label>
                                </div>
                            </div>
                            
                        </div>
                        
                    </form>
                </div>
    </> );
}

export default AccountInfomation;