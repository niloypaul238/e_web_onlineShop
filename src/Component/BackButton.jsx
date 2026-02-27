"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton = () => {
     const router = useRouter()
    return (
        <div>
            <button onClick={() => router.back()} className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
                Back
            </button>
        </div>
    );
};

export default BackButton;