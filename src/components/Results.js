import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../App.css'

const Results = (props) => {

    try {
        console.log(props.location.results.score)
        return <div>
            correct answered :  {props.location.results.score} / 10<br></br>
            <Link to='/' className='btn btn-primary my-1 btn-dark'>Retake test</Link>
            </div>;
    }
    catch (err) {
        return <Redirect to='/' />
    }
    
}

export default Results;