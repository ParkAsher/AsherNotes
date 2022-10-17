import React, { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

/* assets */
import { LoginBox, LoginWrap, LoginInput, LoginButton } from '../assets/LoginStyle.js';

function Login() {

    let navigate = useNavigate();

    const [Id, setId] = useState("");
    const [Pw, setPw] = useState("");

    const [ErrMsg, setErrMsg] = useState("");

    const onChangeId = useCallback(e => {
        setId(e.target.value);
    }, [])

    const onChangePw = useCallback(e => {
        setPw(e.target.value);
    }, [])

    const login = (e) => {
        e.preventDefault();

        if (!Id || !Pw) {
            setErrMsg("모든 빈칸을 채워주세요.")
            return;
        }

        let body = {
            userid: Id,
            password: Pw,
        }

        axios.post("/api/user/login", body).then((res) => {

            if (res.data.success) {
                navigate("/")
            } else {
                setErrMsg(res.data.msg);
                return;
            }

        })

    }

    return (
        <LoginWrap>
            <LoginBox>
                <div className='logo'>
                    <Link to="/">Asher Notes</Link>
                </div>
                <div className='title'>
                    <span>로그인</span>
                </div>
                <form>
                    <LoginInput value={Id} placeholder='아이디' onChange={(e) => onChangeId(e)}></LoginInput>
                    <LoginInput value={Pw} type="password" placeholder='비밀번호' onChange={(e) => onChangePw(e)}></LoginInput>
                    {ErrMsg ? <p style={{ color: "red", margin: "0.5rem 0", fontSize: "15px", fontWeight: "bold" }}>{ErrMsg}</p> : ""}
                    <LoginButton onClick={(e) => login(e)}>로그인</LoginButton>
                </form>
            </LoginBox>
        </LoginWrap>
    )
}

export default Login