import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const PrivateComponent = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/login');
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <div className="bg-earth">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center space-x-5 h-screen text-white z-2">
          <h1 className="text-3xl font-bold text-center py-5">Welcome User</h1>
          <button
            className="group relative py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateComponent;
