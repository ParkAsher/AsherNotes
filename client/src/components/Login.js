import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

/* assets */
import { LoginBox, LoginWrap, LoginInput, LoginButton } from '../assets/LoginStyle.js';

function Login() {

    const [Id, setId] = useState("");
    const [Pw, setPw] = useState("");

    const onChangeId = useCallback(e => {
        setId(e.target.value);
    }, [])

    const onChangePw = useCallback(e => {
        setPw(e.target.value);
    }, [])

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
                    <LoginButton>로그인</LoginButton>
                </form>
            </LoginBox>
        </LoginWrap>
    )
}

export default Login