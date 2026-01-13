import React from 'react'
import AuthGuard from '../components/AuthGuard'
import Mybookings from './Mybookings'

export default function page() {
  return (
    // <AuthGuard>
         <Mybookings />
    //  </AuthGuard>
  )
}