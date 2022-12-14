import styled from 'styled-components'

const HeaderContainer = styled.div`
    width: 100%;
    background-color: #222222;
`;

const HeaderWrap = styled.div`
    width: 1024px;
    margin: 0 auto;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {

        font-size: 1.75rem;
        font-weight: 800;
        letter-spacing: 1.25px;
        color: #ffffff;
    }

    .right {
        display: flex;
        align-items: center;        
    }   
    
    @media (max-width: 1024px) {
        width: 768px;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;

        .logo {
            font-size: 1.25rem;
        }
        
    }
`;

const HeaderButton = styled.button`
    border: 1px solid #ffffff;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    color: #222222;
    outline: none;
    cursor: pointer;  
    background: #ffffff;

    @media (max-width: 768px) {
        padding: 0.5rem 0.75rem;
        font-size: 0.75rem;
    }
`;

const HeaderUserInfo = styled.div`
    font-weight: 800;
    margin-right: 1rem;
    color: #ffffff;

    @media (max-width: 768px) {
        display: none;
    }
`;

export { HeaderWrap, HeaderContainer, HeaderButton, HeaderUserInfo };