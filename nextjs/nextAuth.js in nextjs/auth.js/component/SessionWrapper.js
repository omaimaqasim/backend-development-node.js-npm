"use client"//beacuse it is using ui features 
import { SessionProvider } from "next-auth/react"
import React from 'react'

const SessionWrapper = ({children}) => {
  return (
   <SessionProvider>
    {children}
   </SessionProvider>
   //this session provider give all user information to its children that is ui 
  )
}

export default SessionWrapper
