import React, { Fragment } from "react";
import { Routes, Route } from 'react-router-dom'

/* components */
import MainPage from "./components/MainPage";
import Login from "./components/Login";

function App() {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Fragment>
    );
}

export default App;
