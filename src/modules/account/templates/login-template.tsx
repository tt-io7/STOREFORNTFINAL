"use client"

import { useState } from "react"

import Register from "@modules/account/components/register"
import Login from "@modules/account/components/login"

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
}

const LoginTemplate = () => {
  const [currentView, setCurrentView] = useState("sign-in")

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 relative overflow-hidden">
      {/* Absolute centering with multiple fallback methods */}
      <div 
        className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          width: '100%'
        }}
      >
        <div className="w-full max-w-md mx-auto">
          {currentView === "sign-in" ? (
            <Login setCurrentView={setCurrentView} />
          ) : (
            <Register setCurrentView={setCurrentView} />
          )}
        </div>
      </div>
      
      {/* Enhanced background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-violet-900/20"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl"></div>
      </div>
    </div>
  )
}

export default LoginTemplate
