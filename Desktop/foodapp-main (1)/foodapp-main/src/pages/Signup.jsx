import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    let navigate = useNavigate()
  let arr = JSON.parse(localStorage.getItem('signup')) || []

  let nameref= useRef()
  let emailRef= useRef()
  let passwordRef= useRef()

  const handleSubmit= async(e)=>{
    e.preventDefault();
    let obj={
      name:nameref.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value
    }
    console.log(obj)
    try {
      const response = await fetch('http://localhost:5000/api/customers/create', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(obj)
      });
      const data = await response.json();

      if (response.ok) {
          
          alert('Signup successful');
          navigate('/home')
      } else {
         
          alert('Signup failed: ' + data.message);
      }
  } catch (error) {
      console.error('There was an error!', error);
      alert('An error occurred during signup');
  }
}

   

  
  
  return (
    <div className='authPage '>
 <form className='col-md-6 m-auto p-3 '>
  <h3 className='text-center'>Signup form</h3>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" ref={nameref} className="form-control" id="name" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" />
  </div>

  <div className='text-center'>
  <button onClick={handleSubmit} type="submit" className="btn btn-primary">Signup</button>
  </div>
  <p className='text-center mt-3'>Already a user? <Link to="/login">Login</Link></p>
</form>

    </div>
  )
}

export default Signup
