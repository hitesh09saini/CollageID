import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [file, setFile] = useState(null);
  const [URL, setURL] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [signEmail, setSignEmail] = useState('');
  const [signPass, setSignPass] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('avatar', file);
      formData.append('email', signEmail);
      formData.append('password', signPass);

      const response = await axios.post('http://localhost:3000/api/v1/avatar/register', formData);

      if (response.data.success) {
        console.log(response);
        localStorage.setItem('url', response.data.newAvatar.avatar.secure_url);
        setFile(null);
        setSignEmail('');
        setSignPass('');
      } else {
        alert(`Error: ${response.data.error || 'Internal Server Error'}`);
      }
    } catch (error) {
      console.log(error);
      alert('Error: Failed to fetch');
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  function fetch() {
    if (localStorage.getItem('url')) {
      setURL(localStorage.getItem('url'));
    }
  }

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
   
    try {
      const response = await axios.post('http://localhost:3000/api/v1/avatar/login', {email: loginEmail, password: loginPass});

      if (response.data.success) {
        localStorage.setItem('url', response.data.newAvatar.avatar.secure_url);
        fetch();
        alert('Login successful');
      } else {
        alert(`Error: ${response.data.error || 'Internal Server Error'}`);
      }
    } catch (error) {
      console.log(error);
      alert('Error: Failed to fetch');
    } finally {
      setLoginEmail('');
      setLoginPass('');
    }
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='registration-container'>
        <h1>User Registration</h1>
        <form onSubmit={handleFormSubmit} className="registration-form">
          <input onChange={(e) => setSignEmail(e.target.value)} type="email" placeholder='Email' value={signEmail} />
          <input onChange={(e) => setSignPass(e.target.value)} type="password" placeholder='password' value={signPass} />
          <label htmlFor="avatar">Avatar:</label>
          <input type="file" id="avatar" name="avatar" onChange={handleFileChange} />
          <button id='btn' type="submit" >Register</button>
        </form>

      </div>
      <div>
        <div className="registration-container">
          <h1>User Login</h1>
          <form onSubmit={handleLoginSubmit}>
            <input onChange={(e) => setLoginEmail(e.target.value)} type="email" placeholder='Email' value={loginEmail} />
            <input onChange={(e) => setLoginPass(e.target.value)} type="password" placeholder='password' value={loginPass} />
            <input type="submit" value="login" />
          </form>
        </div>


        <div style={{ background: 'black', display: 'flex', justifyContent: 'center' }} className="registration-container">
          <img src={URL} alt="" style={{ width: '100px', height: '100px' }} />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
