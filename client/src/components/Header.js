import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

/* assets */
import { HeaderButton, HeaderContainer, HeaderUserInfo, HeaderWrap } from '../assets/HeaderStyle';
import { logoutUser } from '../Reducer/userSlice';

function Header() {

    const user = useSelector((state) => state.user)

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const logout = async (e) => {

        // 쿠키삭제
        await axios.post("/api/user/logout").then((res) => {

            if (res.data.success) {
                console.log("로그아웃");
                navigate("/");
            }
        })

        // store clear
        dispatch(logoutUser());
        // localStorage clear
        localStorage.removeItem("user");
    }

    return (
        <HeaderContainer>
            <HeaderWrap>
                <Link className='logo'>Asher Notes</Link>
                {user._id ? (
                    <div className='right'>
                        <HeaderUserInfo>{user.name}</HeaderUserInfo>
                        <HeaderButton onClick={(e) => logout(e)}>로그아웃</HeaderButton>
                    </div>
                ) : (
                    <div className='right'>
                        <HeaderButton onClick={(e) => { navigate("/login") }}>로그인</HeaderButton>
                    </div>
                )}

            </HeaderWrap>
        </HeaderContainer>
    )
}

export default Header