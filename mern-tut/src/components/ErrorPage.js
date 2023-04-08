import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
    <div className='Container mt-4'>
        <div class="text-center">
        <img className='errorpageImg' src="https://cdn2.iconfinder.com/data/icons/scenes-15/893/error_woman_problem_website-128.png"/>
          <h1>404 Error Page</h1>
          <h2>We are Sorry, page not found!</h2>
          <p>The page you are looking for might have been removed
            had its name changed or is temporarily unavilable.
          </p>
         <Link className="btn btn-primary" to="/">Back To HomePage</Link>
          
        </div>
      </div>
        
    </>
  )
}

export default ErrorPage