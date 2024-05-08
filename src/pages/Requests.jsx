import React, { useState, useEffect } from 'react';

const Requests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/fetch-requests')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          setRequests(data.data);
        } else {
          console.error('Error fetching requests:', data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching requests:', error);
      });
  }, []);

  return (
    <div className='flex items-center justify-center '>
      <div className='w-4/5'>
        <h1 className='font-bold text-4xl py-5 m-6'>Requests</h1>
        <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  N-request
                </th>
                <th scope="col" className="px-6 py-3">
                  status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {requests.map(request => (
                <tr key={request.id} className="odd:bg-white even:bg-gray-50 border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {request.id}
                  </th>
                  <td className="px-6 py-4">
                    {request.name}
                  </td>
                  <td className="px-6 py-4">
                    {request.type}
                  </td>
                  <td className="px-6 py-4 items-center flex">
                    <div className={`w-2 h-2 ${request.status === 0 ? 'bg-yellow-500' : request.status === 1 ? 'bg-green-500' : 'bg-red-500'} rounded-full mx-1`}></div>
                    {request.status === 0 ? 'Pending' : request.status === 1 ? 'Approved' : 'Rejected'}
                  </td>
                  <td className="px-6 py-4 text-white text-xs font-bold">
                    <a href="#" className="font-medium py-2 px-3 bg-green-500 rounded-md mx-1">Validate</a>
                    <a href="#" className="font-medium py-2 px-3 bg-red-500 rounded-md mx-1">Refuse</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Requests;
