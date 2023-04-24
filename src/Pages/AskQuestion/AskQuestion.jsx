import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./AskQuestion.css";
import { askQuestion } from "../../actions/question.js";

const AskQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState("");
    const [questionBody, setQuestionBody] = useState("");
    const [questionTags, setQuestionTags] = useState("");

    const dispatch = useDispatch();
    const User = useSelector((state) => state.currentUserReducer);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (User) {
          if (questionTitle && questionBody && questionTags) {
            dispatch(
              askQuestion(
                {
                  questionTitle,
                  questionBody,
                  questionTags,
                  userPosted: User.result.name,
                },
                navigate
              )
            );
          } else alert("Please enter all the fields");
        } else alert("Login to ask question");
      };
     
      const handleEnter = (e) => {
        if (e.key === "Enter") {
          setQuestionBody(questionBody + "\n");
        }
      };

  return (
   <div className='ask-question'>
      <div className="ask-ques-container">
        <h1>Ask a Public question</h1>
        <form  onSubmit={handleSubmit}>
            <div className="ask-form-container">
                <label htmlFor='ask-ques-title'>
                    <h4>Title</h4>
                    <p>Be specific and imagine you are asking a question to another person</p>
                    <input type='text' onChange={(e) => { setQuestionTitle(e.target.value);}}  id="ask-ques-title" placeholder='what is hoc in react'/>

                </label>
                <label htmlFor='ask-ques-body'>
                    <h4>Body</h4>
                    <p>Include all the information someone would need to answer a question</p>
                    <textarea name="" id="ask-ques-body" onChange={(e) => { setQuestionBody(e.target.value); }} cols="30" rows="10" onKeyDown={handleEnter}></textarea>
                </label>
                <label htmlFor='ask-ques-tags'>
                    <h4>Tags</h4>
                    <p>Add atleast 5 tags </p>
                    <input type='text'  onChange={(e) => {setQuestionTags(e.target.value.split(" "));}}  id="ask-ques-tags" placeholder='react jaavscript ..'/>
                    
                </label>
            </div>
            <input type='submit' value="review your question"  className='review-btn'/>
        </form>
      </div>
   </div>
  )
}

export default AskQuestion