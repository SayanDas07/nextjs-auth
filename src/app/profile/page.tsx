"use client";
import axios from 'axios';
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("nothing")

    const logoutHandler = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    };

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/tokenData')
        console.log(res.data);
        setData(res.data.data._id)
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Profile page
            </p>
            <h2 className="p-1 rounded bg-green-500">
                {
                    data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}
                    </Link>
                }
            </h2>
            <hr />
            <button
                onClick={logoutHandler}
                className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Logout</button>

            <hr />
            <button
                onClick={getUserDetails}
                className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >GetUser Details</button>

        </div>
    )
}