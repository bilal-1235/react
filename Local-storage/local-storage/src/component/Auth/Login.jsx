import React, { useState } from 'react';

const Login = ({handleLogin}) => {
  // State for email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // State for success message

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    
    // Basic validation
    if (!email || !password) {
      setError('Both fields are required.');
      setSuccess(''); // Clear success message if error occurs
      return;
    }

    setError(''); // Clear any previous error
    setSuccess('Form submitted successfully!'); // Show success message

    // Reset the form fields
    setEmail('');
    setPassword('');
    
    console.log('Form submitted:', { email, password });

    // Here you can add any further logic, e.g., calling an API
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-center justify-center'
        >
          <input
            required
            aria-label="Email"
            className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400'
            type="email"
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Two-way binding
          />
          <input
            required
            aria-label="Password"
            className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full mt-3 placeholder:text-gray-400'
            type="password"
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Two-way binding
          />
          <button
            type="submit"
            aria-label="Login"
            className='text-white outline-none border-none bg-emerald-600 py-3 px-5 rounded-full mt-3'
          >
            Login
          </button>

          {/* Display error message if there is one */}
          {error && <p className="text-red-500 mt-3">{error}</p>}

          {/* Display success message if form is submitted successfully */}
          {success && <p className="text-green-500 mt-3">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
