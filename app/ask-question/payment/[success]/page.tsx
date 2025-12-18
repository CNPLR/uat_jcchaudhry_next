import React from 'react'
import PaymentSuccess from './PaymentSuccess';

export default async function Page({searchParams}: any){
    const success = await searchParams;
  return (
   <PaymentSuccess searchParams={success}/>
  )
}
