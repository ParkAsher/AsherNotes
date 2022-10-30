import React, { Fragment } from "react";
import { Routes, Route } from 'react-router-dom'


/* components */
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Header from "./components/Header";
import Write from "./components/Write";
import PostArea from "./components/PostArea";

function App() {

    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/write" element={<Write />} />
                <Route path="/post/:postNum" element={<PostArea />} />
            </Routes>
        </Fragment>
    );
}

export default App;
