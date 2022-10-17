import styled from 'styled-components'

/* 전체화면 */
const LoginWrap = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #3b4850;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoginBox = styled.div`
    width: 360px;
    padding: 2rem;
    background: #ffffff;
    border-radius: 4px;

    .logo {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        padding-bottom: 1.5rem;
        font-weight: bold;
        font-size: 1.825rem;
        color: #22293c;
    }

    .title {
        display: flex;
        justify-content: flex-start;
        text-align: center;
        align-items: center;
        font-weight: bold;
        font-size: 1.25rem;
        padding-bottom: 1.5rem;
    }
`;

const LoginInput = styled.input`
    border: none;
    border-bottom: 1px solid #adb5bd;
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;

    &::placeholder {
        font-weight: bold
    }
        
    &:focus {
        border-bottom: 1px solid gray;
    }

    & + & {
        margin-top: 1rem;
    }
`;

const LoginButton = styled.button`
    border: 1px solid #22293c;
    border-radius: 4px;
    font-size: 1.25rem;
    font-weight: bold;
    padding: 0.25rem 0;
    color: #ffffff;
    outline: none;
    cursor: pointer;
    width: 100%;
    margin-top: 1.5rem;

    background: #22293c;
    &:hover {
        background: #ffffff;
        color: #22293c;
    }
`;


export { LoginWrap, LoginBox, LoginInput, LoginButton };