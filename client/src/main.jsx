import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { AuthContextProvider } from './context/AuthContext.jsx'
import Responsive from './context/Responsive.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthContextProvider>
            <Responsive>
                <App />
            </Responsive>
        </AuthContextProvider>
    </BrowserRouter>
)
