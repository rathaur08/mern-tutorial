import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
  return (
    <div>
        <div className='container w-50 mt-4' style={{background: "#d8dee1"}}>
                <div className='form-container'>
                <h1>Login </h1>
                    <form className=''>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email"  />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" />
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">Log in</button>
                    </form>
                </div>
            </div>

    </div>
  )
}

export default Login