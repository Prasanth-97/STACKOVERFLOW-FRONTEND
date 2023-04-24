import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from './components/Navbar/Navbar';
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestions());
    // dispatch(fetchAllUsers());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
         <Navbar />
         <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
