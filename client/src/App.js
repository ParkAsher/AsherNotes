import React, { Fragment, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';

/* components */
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {

    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Fragment>
    );
}

export default App;
