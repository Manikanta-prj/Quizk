import React, { Fragment, useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


const Landing = () => {

    const [option, setOption] = useState('easy');
    const [questions, setQuestions] = useState([]);

    const selected = (event) => {
        setOption(event.target.value)
    }

       useEffect(() => {
        async function fetch() {
            const res = await axios.get(`https://opentdb.com/api.php?amount=10&category=18&difficulty=${option}&type=multiple`)
            setQuestions(res.data.results)
        }
        fetch();
        
    }, [option])



    return (
        
        <Fragment >
            <div className="App">
                <select className="btn btn-primary my-1"onChange={selected}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select><br></br>
                <Link to={{pathname:'/quiz',aboutProps:{option,questions} }}className='btn btn-primary my-1 btn-dark' >Start Quiz</Link>
            </div>
        </Fragment>
        
    )

}

export default Landing;