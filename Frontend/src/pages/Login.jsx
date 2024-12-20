import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ usernameOrEmail: '', password: '' });
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Login successful!');
        localStorage.setItem('token', data.token); // Store token
        login(data.user); // Update context with user data
        window.location.href = '/'; // Redirect to home
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <div>
          <label htmlFor="usernameOrEmail" className="block text-sm font-medium text-gray-700">
            Username or Email
          </label>
          <input
            type="text"
            name="usernameOrEmail"
            placeholder="Enter your username or email"
            value={formData.usernameOrEmail}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Login
        </button>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
