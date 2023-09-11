
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useRef, useEffect, useContext } from 'react';
import {ViewReviewsContext} from './ViewReviews'
import getCurrentDate from './getDate';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import defaultAvatar from '../../account/Account/avatar.png'

function WriteReview() {

    // dùng để lưu giá trị nhập
    const [input, setInput] = useState("");
    const textareaRef = useRef(null);

    // dùng để kiểm tra writeReview có đang được focus không
    const [isFocused, setIsFocused] = useState(false)

    const {listReview,setListReview} = useContext(ViewReviewsContext)

    const {type, id} = useParams();

    // auto resize textarea
    const resizeTextArea = () => {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
      };
    
    useEffect(resizeTextArea, [input]);
    
    const handleChange = (e) =>{
        setInput(e.target.value)
    }   

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    /////////////////lấy tên người dùng///////
    const [fullName, setFullName] = useState('')
    const [avatar, setAvatar] = useState()
    const token = sessionStorage.getItem('token')
    const headers = {
        Authorization: `Bearer ${token}`,
      };

    

    useEffect(() => {
        const getInfoFromAPI = async() => {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL_PREF}/account/info`, {headers})
            const result = response.data
            if(result.fullName !== undefined){
                setFullName(result.fullName)
            }
            if(result.avatar !== undefined){
                setAvatar(`${process.env.REACT_APP_SERVER_URL_PREF}/update/image/${result.avatar}`)
            }else{
                setAvatar(defaultAvatar)
            }
    
        }

        if(token !== null){
            getInfoFromAPI()
            console.log('token !== null')
        }else{
            setAvatar(defaultAvatar)
            console.log('token === null')
        }
        

    },[])
    ///////////////////////////////////////////

    const handleSubmit = (e) => {
        e.preventDefault()
        if(token !== null){
            let newReview = {
                name: fullName,
                date: getCurrentDate(),
                overview: input,
                type: type,
                id: id
            }
            
            let currentState = [...listReview];
            currentState.unshift(newReview)
            setListReview([...currentState])
            setInput("")
    
            // thêm dữ liệu vào api
            const fetchConnect = async () => {
                try{
                    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL_PREF}/film/${19995}/addReview`,{newReview})
                }catch(err){
                    console.log(err)
                }
            }
            fetchConnect()
        }
        
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          handleSubmit(e);
        }
    }

    

    return (
        
        <form onSubmit={handleSubmit} className='containerWriteReview'>
            <div>
                <div className='pt-3 mb-2 d-flex align-items-center fw-normal fs-6'>
                    {/* <FontAwesomeIcon icon={faUser} className='border border-1 rounded-5 p-2 text-danger'/>   */}
                    <img className='avatar' src={avatar}/>
                    <span className='mx-2 fw-bold '>{fullName}</span>
                </div>
            </div>
        
            <div className={`writeReview fs-6 rounded-1 p-2 h-auto d-flex flex-wrap justify-content-end ${isFocused ? 'isFocus' : ''}`}>
                <textarea 
                    ref={textareaRef}
                    className= 'inputReview text-light flex-grow-1' 
                    onChange={handleChange}
                    placeholder='Write your review!'
                    value={input}
                    rows={1}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    />

                <button className='fs-6 my-1 px-3 py-2 badge bg-success'>
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </button>
                

            </div>
        </form>
        
     );
}

export default WriteReview;