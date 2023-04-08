import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Signup = () => {
    const [user, setUser]= useState({
      name:"",email:"",number:"",work:"",password:"",cpassword:""
		});
		
		let name, value;
		const handleInputs = (e) => {
			console.log(e);
			name = e.target.name;
			value = e.target.value;
			setUser({...user, [name]:value})
		}

    return (
        <div>
            <div className='container w-50 mt-4' style={{ background: "#d8dee1" }}>
                <div className='form-container p-3'>
                    <h1>Signup </h1>
                    <form className=''>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="name"  name='name' class="form-control" id="name" value={user.name} onChange={handleInputs} placeholder="Enter Your Name" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" name='email' class="form-control" id="email" value={user.email} onChange={handleInputs} placeholder="Enter Your Email" />
                        </div>
                        <div class="mb-3">
                            <label for="number" class="form-label">Phone</label>
                            <input type="number" name='number' class="form-control" id="number" value={user.number} onChange={handleInputs} placeholder="Enter Your Number" />
                        </div>
                        <div class="mb-3">
                            <label for="work" class="form-label">Profession</label>
                            <input type="work" name='work' class="form-control" id="work" value={user.work} onChange={handleInputs} placeholder="Enter Your Works" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" name='password' class="form-control" id="password" value={user.password} onChange={handleInputs} placeholder="Enter Your Password" />
                        </div>
                        <div class="mb-3">
                            <label for="cpassword" class="form-label">CPassword</label>
                            <input type="password" name='cpassword' class="form-control" id="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="Enter Your Conform Password" />
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">Register</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signup