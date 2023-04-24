import React from 'react'
import "./HomeMainbar.css";
import { useLocation, useNavigate} from "react-router-dom";
import QuestionList from './QuestionList';
import { useSelector } from "react-redux";

const HomeMainbar = () => {
    const user = 1;
    const navigate = useNavigate();
    const location = useLocation();

    const questionsList = useSelector((state) => state.questionsReducer);

    // var questionsList = [{
    //   _id : 1,
    //   upVotes:3,
    //   downVotes:2,
    //   noOfAnswers:2,
    //   questionTitle:"What is a function",
    //   questionBody:"It meant to be",
    //   questionTags:["java","node js","react js","mongodb"],
    //   userPosted:"mano",
    //   askedOn:"Jan 1",
    //   userId:1,
    //   answer:[{
    //       answerBody : "Answer",
    //       userAnswered: "Kumar",
    //       answeredOn : "jan 2",
    //       userId : 2,
    //   }]
    // },{
    //   _id : 2,
    //   upVotes:3,
    //   downVotes:2,
    //   noOfAnswers:2,
    //   questionTitle:"What is a function",
    //   questionBody:"It meant to be",
    //   questionTags:["javascript","R","mongodb"],
    //   userPosted:"mano",
    //   askedOn:"Jan 1",
    //   userId:1,
    //   answer:[{
    //       answerBody : "Answer",
    //       userAnswered: "Kumar",
    //       answeredOn : "jan 2",
    //       userId : 2,
    //   }]
    // },{
    //   _id : 3,
    //   upVotes:3,
    //   downVotes:2,
    //   noOfAnswers:2,
    //   questionTitle:"What is a function",
    //   questionBody:"It meant to be",
    //   questionTags:["javascript","R","mongodb"],
    //   userPosted:"mano",
    //   askedOn:"Jan 1",
    //   userId:1,
    //   answer:[{
    //       answerBody : "Answer",
    //       userAnswered: "Kumar",
    //       answeredOn : "jan 2",
    //       userId : 2,
    //   }]
    // }];
  
  const checkAuth = () => {
    if(user === null){
      alert("Login or signup to ask question");
      navigate("/Auth");
    }
    else{
      navigate("/AskQuestion");
    }
  }

  return (
    <div className='main-bar'>
     <div className="main-bar-header">
       { location.pathname === "/" ? <h1>Top questions</h1> : <h1>All questions</h1>}
       <button to="/AskQuestion" onClick={checkAuth} className='ask-btn'>Ask Question</button>
     </div>
     <div>
      {
        questionsList.data === null ? 
        <h1>Loading...</h1> :
        <>
        <p>{questionsList.data.length} questions</p>
        <QuestionList questionsList={questionsList.data} />
        </>
      }
     </div>
    </div>
  )
}

export default HomeMainbar;