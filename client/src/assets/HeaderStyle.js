import styled from 'styled-components'

const HeaderContainer = styled.div`
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0,0,0, 0.08);
`;

const HeaderWrap = styled.div`
    width: 1024px;
    margin: 0 auto;
    height: 5rem;
    padding-left: 1rem;
    padding-right: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1024px) {
        width: 768px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    .logo {

        font-size: 1.75rem;
        font-weight: 800;
        letter-spacing: 1.25px;
        color: #22293c;
    }

    .right {
        display: flex;
        align-items: center;
    }    
`;

const HeaderButton = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;  
    background: #22293c;

    @media (max-width: 768px) {
        padding: 0.375rem 1rem;
        font-size: 0.75rem;
    }
`;

const HeaderUserInfo = styled.div`
    font-weight: 800;
    margin-right: 1rem;
`;

export { HeaderWrap, HeaderContainer, HeaderButton, HeaderUserInfo };