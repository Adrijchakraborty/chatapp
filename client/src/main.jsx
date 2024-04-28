import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { AuthContextProvider } from './context/AuthContext.jsx'
import Responsive from './context/Responsive.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthContextProvider>
            <SocketContextProvider>
            <Responsive>
                <App />
            </Responsive>
            </SocketContextProvider>
        </AuthContextProvider>
    </BrowserRouter>
)
