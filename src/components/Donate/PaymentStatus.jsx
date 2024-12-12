import React from 'react';

const PaymentStatus = () => {

  alert('Test Payment Completed succesfully (will need an Authenticated Credentials) ')

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
        <h1 className="text-2xl text-green-600 mb-2">Payment Successful</h1>
        <p className="text-base text-gray-600 mb-4">Your payment has been processed successfully. Thank you for your donation!</p>
        <p className="text-sm text-blue-600">
          Account Status: <span className="font-bold">Connected</span>
        </p>
      </div>
    </div>
  );
};

export default PaymentStatus;
