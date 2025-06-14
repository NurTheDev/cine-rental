import React from 'react';

const EmptyMessage = () => {
    return (
        <div className="flex flex-col items-center justify-center p-6 text-center">
            <svg
                className="w-16 h-16 mb-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
            </svg>
            <h3 className="mb-1 text-lg font-semibold text-gray-700 dark:text-gray-300">Your cart is empty</h3>
            <p className="text-gray-500 dark:text-gray-400">No movies have been added to your cart yet</p>
        </div>
    );
};

export default EmptyMessage;
