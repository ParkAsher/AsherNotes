import React, { Fragment } from "react";
import { Routes, Route } from 'react-router-dom'


/* components */
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Header from "./components/Header";
import Write from "./components/Write";
import PostArea from "./components/PostArea";
import Edit from "./components/Edit";

function App() {

    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/write" element={<Write />} />
                <Route path="/post/:postNum" element={<PostArea />} />
                <Route path="/edit/:postNum" element={<Edit />} />
            </Routes>
        </Fragment>
    );
}

export default App;
