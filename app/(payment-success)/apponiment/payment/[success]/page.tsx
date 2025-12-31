import PaymentSuccess from '@/app/(payment-success)/PaymentSuccess';
import React from 'react'

export default async function Page({searchParams}: any){
    const success = await searchParams;
  return (
   <PaymentSuccess searchParams={success}/>
  )
}