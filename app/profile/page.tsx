import React from 'react'
import Profile from './Profile'
import axios from 'axios';

const Path = process.env.NEXT_PUBLIC_URI;

export async function getUserData(mobNumber: string, token: string): Promise<any> {
            let number = JSON.parse(mobNumber as any);

            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Ensure `token` is not null or undefined
            };

            const res = await axios.get(`${Path}websiteuser/${JSON.parse(number)}`, { headers })

            return res;
        }
export default function page() {
  return (
    <div>
      <Profile />
    </div>
  )
}
