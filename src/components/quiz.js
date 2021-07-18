import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Question from './Question';





const Quiz = (props) => {

    const [questions, setQuestions] = useState(props.location.aboutProps.questions);
    const [counter, setCounter] = useState(10);
    const [countquestion, setcountquestion] = useState(0);
    const [timeup, setTimeup] = useState(false);
    const [answered, setanswered] = useState();
    const [score,setScore] = useState(0)
    
    const onclick = (event) => {
        const ans = questions[countquestion].correct_answer;

        if (String(event) == String(ans)) {
            setanswered(true)
            setScore(score + 1);
        }
        else {
            setanswered(false)
        }

    }

    function nextquestion() {
        
        if (questions[countquestion] == undefined || countquestion == 9) {
            setCounter(-1)
            setTimeup(true)
        }
        else 
        setcountquestion(countquestion + 1);    
    }

    useEffect(() => {
    const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if (counter === 0) {
            setCounter(10);
            nextquestion();
            setanswered();
        }
    return () => clearInterval(timer);
  }, [counter]);
    //console.log({questions})

    return (
        <div className="App">
            <div className="right">Time : {counter}</div>
            <Question onclick={onclick} qus={questions[countquestion]} />
            <div>
                {questions[countquestion] !== undefined && answered!==undefined ? answered ? <div>Correct</div> : <div>Wrong answer, correct answer is : {questions[countquestion].correct_answer}</div> : null}
            </div>
            {timeup ? <Redirect to={{ pathname:'/results',results:{score}}} /> : null}
        </div>
    );

}

export default Quiz;