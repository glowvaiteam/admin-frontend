import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const ADMIN_EMAIL = 'admin@glowvai.in';
const ADMIN_PASSWORD = 'Glowvai@sardhar12';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        localStorage.setItem('isAdmin', 'true');
        toast.success('Login successful!');
        navigate('/');
      } else {
        toast.error('Invalid credentials');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-white to-yellow-300">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl border border-yellow-200">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-3xl font-extrabold text-yellow-500 mb-1 tracking-wide">Glowvai Admin</h2>
          <span className="text-sm text-gray-500">Sign in to your admin account</span>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder=""
              required
              autoFocus
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder=""
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-bold text-white bg-yellow-500 hover:bg-yellow-600 transition ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="mt-6 text-xs text-gray-400 text-center">
          Only authorized admin can login.<br />© {new Date().getFullYear()} Glowvai
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
