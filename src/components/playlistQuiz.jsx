import React from "react";
import { Link } from "gatsby";

import quizImage from "../images/quiz-img.svg";

const playlistQuiz = ({ active, title, quizId }) => {
  return (
    <Link to={"/courseTemplate"} state={{ quizId }}>
      <div className={`playlist-item ${active ? "active" : ""}`}>
        <input type="checkbox" />
        <img src={quizImage} alt="quiz" />
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default playlistQuiz;
