
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useRef, useEffect, useContext } from 'react';
import {ViewReviewsContext} from './ViewReviews'
import getCurrentDate from './getDate';


function WriteReview() {

    // dùng để lưu giá trị nhập
    const [input, setInput] = useState("");
    const textareaRef = useRef(null);

    // dùng để kiểm tra writeReview có đang được focus không
    const [isFocused, setIsFocused] = useState(false)

    const {listReview,setListReview} = useContext(ViewReviewsContext)

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

    const handleSubmit = (e) => {
        e.preventDefault()
        let newReview = {
            name: "Châu Hoàng Tấn",
            date: getCurrentDate(),
            overview: input
        }
        
        let currentState = [...listReview];
        currentState.push({
            newReview
        })
        setListReview(prevList => [...prevList, newReview])
        setInput("")
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          handleSubmit(e);
        }
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <div>
                <div className='pt-3 mb-2 d-flex align-items-center fw-normal fs-6'>
                    <FontAwesomeIcon icon={faUser} className='border border-1 rounded-5 p-2 text-danger'/>  
                    <span className='mx-2 fw-bold '>Châu Hoàng Tấn</span>
                </div>
            </div>
        
            <div className={`writeReview fs-6 rounded-1 p-2 w-75 h-auto d-flex flex-wrap justify-content-end ${isFocused ? 'isFocus' : ''}`}>
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

                <button className='sendReview fs-6 my-1 px-3 py-2 badge bg-success'>
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </button>
                

            </div>
        </form>
        
     );
}

export default WriteReview;