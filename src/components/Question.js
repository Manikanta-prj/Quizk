import React from 'react';
import '../App.css'


const Question = (props) => {
    const count =0

    const answers = [...props.qus.incorrect_answers, props.qus.correct_answer]
    

    return (
        <div>
            <div className='line question'>
                {props.qus.question}
            </div>
            <div className = 'top'>
                {answers.map((e,index) => <div key={index} onClick={() =>props.onclick(e)} className='line answers'>{e}</div>)}
            </div>
        </div>
        
    )
}

export default Question;