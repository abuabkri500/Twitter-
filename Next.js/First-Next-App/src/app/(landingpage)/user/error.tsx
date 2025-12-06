"use client"
import React from 'react'


const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-red-500">Something went wrong!</h2>
            <p>{error.message}</p>
            <button
                onClick={() => reset()}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
                Try again
            </button>
        </div>
    );
};

export default Error;
