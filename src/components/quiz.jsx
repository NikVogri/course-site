import React, { useEffect, useState, useCallback } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
const tempFetchedQuizData = {
  id: 4,
  quizId: "atNrsadwSTB33sd",
  title: "Test 1: Basics",
  questions: [
    {
      question: "What is PHP?",
      correctAnswer: "Server side language",
      answers: [
        "Front end language",
        "Server side language",
        "Piece of code that users run on their machine",
      ],
    },
    {
      question: "What is a local server?",
      correctAnswer: "Server that runs on your machine",
      answers: [
        "Server that runs on your machine",
        "Server that runs on your ISP's servers ",
        "Server that runs on the cloud",
      ],
    },
    {
      question: "Why do we install packages like XAMPP?",
      correctAnswer: "To create a local PHP server",
      answers: [
        "To use as a template for websites",
        "To speed up your computer",
        "To create a local PHP server",
      ],
    },
  ],
};

const Quiz = ({ quizId, title }) => {
  const [quizData, setQuizData] = useState("");
  const [answers, setAnswers] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const { register, handleSubmit } = useForm();

  const fetchQuizData = useCallback(async () => {
    // fetch data from server
    // THIS IS TEMP
    setQuizData(tempFetchedQuizData);
  });

  useEffect(() => {
    fetchQuizData();
  }, [fetchQuizData]);

  const onSubmit = data => {
    setAnswers(data);
    const answerValidity = Object.keys(data).map((answer, index) => {
      if (data[answer] === "select") {
        return false;
      }
      if (data[answer] !== quizData.questions[index].correctAnswer) {
        return false;
      } else {
        return true;
      }
    });

    setCorrectAnswers(answerValidity);

    // Check and count correct answers.
    let count = answerValidity.filter(answer => answer !== false);
    setCorrectCount(count.length);
  };

  return (
    <div className="quiz">
      <div className="quiz-container">
        <h2 className="quiz-title">{quizData && quizData.title}</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {quizData &&
            quizData.questions.map((question, index) => (
              <Form.Group key={question.question}>
                <Form.Label>{question.question}</Form.Label>
                <Form.Control
                  ref={register}
                  as="select"
                  name={index}
                  // ref={register}
                  isInvalid={
                    correctAnswers.length > 0 ? !correctAnswers[index] : false
                  }
                  isValid={
                    correctAnswers.length > 0 ? correctAnswers[index] : false
                  }
                >
                  <option value="select">Select</option>
                  {question.answers.map((answer, index) => (
                    <option key={index} value={answer}>
                      {answer}
                    </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                <Form.Control.Feedback type="valid"></Form.Control.Feedback>
              </Form.Group>
            ))}

          <div className="result-container">
            <button className="btn btn-primary">Check</button>
            <span>
              {correctCount ? correctCount : "0"}/
              {quizData && quizData.questions.length}
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Quiz;
