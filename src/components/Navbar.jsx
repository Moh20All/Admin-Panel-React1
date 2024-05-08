import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-5 flex justify-end">
      <div className="container w-1/3 ">
        <ul className="flex justify-between items-center ">
          <li><a href="/" className="text-white font-semibold pr-2 hover:bg-teal-700 hover:py-2 hover:px-2 hover:rounded-md transition-all">Home</a></li>
          <li><a href="/requests" className="text-white font-semibold pr-2 hover:bg-teal-700 hover:py-2 hover:px-2 hover:rounded-md transition-all">Requests</a></li>
          <li><a href="/about" className="text-white font-semibold pr-2 hover:bg-teal-700 hover:py-2 hover:px-2 hover:rounded-md transition-all">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
