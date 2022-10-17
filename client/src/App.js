import React, { Fragment } from "react";
import { Routes, Route } from 'react-router-dom'

/* components */
import Login from "./components/Login";

function App() {
    return (
        <Fragment>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Fragment>


    );
}

export default App;
