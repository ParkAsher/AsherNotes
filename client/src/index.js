import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './Reducer/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { clearUser, loginUser } from './Reducer/userSlice';
import axios from 'axios';

function loadUser() {

    try {

        const user = localStorage.getItem("user");
        // console.log(JSON.parse(user));

        // 시작할때 로컬스토리지에 유저가 없다면 그냥 넘어간다.
        if (!user) {

            return;

        } else {

            // 있다면 store에 유저를 넣어준다.
            store.dispatch(loginUser(JSON.parse(user)));

            // store에 유저는 있고, 토큰 유효성 검사
            axios.post("/api/user/check").then((res) => {

                // 토큰도 유효
                if (res.data.success) {

                    // console.log(res.data.user);
                    console.log(res.data.msg)
                }

            }).catch((err) => {

                // 토큰이 유효하지않음
                // 로컬스토리지 초기화, store 초기화
                console.log(err.response.data.msg);
                localStorage.removeItem("user");
                store.dispatch(clearUser());

                document.location.reload();

            })
        }

    } catch (err) {
        console.log("localstorage is not working", err);
    }
}

loadUser();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
