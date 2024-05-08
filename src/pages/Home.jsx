import React from 'react';
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
const Home = () => {
  const renwal = ()=>{
    console.log("renew")
  }
  const requests = ()=>{
    console.log("requests")
  }
  return (
<div className="bg-gray-100 min-h-screen">
      <header className="py-8 px-4">
        <h1 className="text-3xl font-semibold">Welcome to Your Insurance Admin Dashboard</h1>
        <p className="text-lg">Manage policies, process claims, and analyze data with ease.</p>
      </header>
      <section className="container mx-auto py-8 h-screen">
        <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
      <Link to="/requests">
      <div className="bg-white cursor-pointer hover:bg-slate-50 transition-all p-4 rounded-lg shadow flex items-center flex-col" onClick={requests}>
          <img width={180} src="/assets/document.gif" alt="Animated GIF" />
          <h1 className='text-xl font-semibold'>Manage Requests</h1>
          </div>
      </Link>
          <div className="bg-white cursor-pointer hover:bg-slate-50 transition-all p-4 rounded-lg shadow flex items-center flex-col" onClick={renwal}>
          <img width={180} src="/assets/paper.gif" alt="Animated GIF" />
          <h1 className='text-xl font-semibold'>Manage Rnewals</h1>
          </div>

        </div>
      </section>
      <footer className="bg-gray-200 text-gray-600 text-center py-4">
        <p>&copy; 2024 Your Insurance Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
