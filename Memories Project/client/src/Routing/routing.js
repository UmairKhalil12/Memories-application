import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from '../Pages/post';
import Login from '../Pages/login';
import Signup from "../Pages/signup"
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const Routing = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log("routing authentication", isAuthenticated);
    return (
        <BrowserRouter >
            <Routes>
                {isAuthenticated ? (
                    <>
                        <Route path="/" element={<Post />} />
                        <Route path='*' element={<Navigate to="/" />} />
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path='*' element={<Navigate to="/" />} />
                    </>
                )}
            </Routes>
        </BrowserRouter >
    );
}

export default Routing;
