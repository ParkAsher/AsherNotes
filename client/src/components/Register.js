import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

/* assets */
import { LoginBox, LoginWrap, LoginInput, LoginButton } from '../assets/LoginStyle.js';

function Register() {

    const [Name, setName] = useState("");
    const [Id, setId] = useState("");
    const [Pw, setPw] = useState("");

    const onChangeName = useCallback(e => {
        setName(e.target.value);
    }, [])

    const onChangeId = useCallback(e => {
        setId(e.target.value);
    }, [])

    const onChangePw = useCallback(e => {
        setPw(e.target.value);
    }, [])

    const regfunc = (e) => {
        e.preventDefault();

        let body = {
            name: Name,
            userid: Id,
            password: Pw,
        }

        axios.post("/api/user/register", body).then((res) => {
            if (res.data.success) {
                console.log(res.data.msg)
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
                    <span>회원가입</span>
                </div>
                <form>
                    <LoginInput value={Name} placeholder='이름' onChange={(e) => onChangeName(e)}></LoginInput>
                    <LoginInput value={Id} placeholder='아이디' onChange={(e) => onChangeId(e)}></LoginInput>
                    <LoginInput value={Pw} type="password" placeholder='비밀번호' onChange={(e) => onChangePw(e)}></LoginInput>
                    <LoginButton onClick={(e) => regfunc(e)}>회원가입</LoginButton>
                </form>
            </LoginBox>
        </LoginWrap >
    )
}

export default Register